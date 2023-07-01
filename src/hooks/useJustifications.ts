import { justificationsLink } from "@utils";
import axios from "axios";
import useSWR from "swr";

export interface Justification {
  id: string;
  disputeIDAndAppeal: string;
  voteID: number;
  justification: string;
  created_at: string;
}

const justificationsFetcher = async ([disputeId, appeal]: [number, number]) =>
  (await axios.get(justificationsLink(disputeId, appeal))).data.payload
    .justifications;

const useJustifications = (
  disputeId: number,
  appeal: number
): [Justification[], Error] => {
  const { data, error } = useSWR(
    [disputeId, appeal, "justifications"],
    justificationsFetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return [data, error];
};

export default useJustifications;