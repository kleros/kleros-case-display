import { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";
import { StatusCodes } from "http-status-codes";

const supabase = createClient(
  process.env.DATALAKE_URL,
  process.env.DATALAKE_KEY
);
const allowedNetworks = ["gnosischain", "ethereum", "chiado"];

const headers = { "Access-Control-Allow-Origin": "*" };

export const handler: Handler = async (ev) => {
  try {
    if (!ev.httpMethod) throw "Wrong method";
    if (!ev.queryStringParameters) throw "No query parameters provided";

    const { disputeID, appeal, network } = ev.queryStringParameters;

    if (!network || !allowedNetworks.includes(network))
      throw `Network must be one of ${allowedNetworks}`;

    if (!disputeID || isNaN(+disputeID) || !appeal || isNaN(+appeal))
      throw "disputeID and appeal must be valid numbers";

    const { data, error } = await supabase
      .from(`${network}-justifications`)
      .select("*")
      .eq("disputeIDAndAppeal", `${disputeID}-${appeal}`);

    if (error)
      return {
        headers,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        body: JSON.stringify({ error: error.message }),
      };

    return {
      headers,
      statusCode: StatusCodes.OK,
      body: JSON.stringify({ payload: { justifications: data } }),
    };
  } catch (err: any) {
    return {
      headers,
      statusCode: StatusCodes.BAD_REQUEST,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};
