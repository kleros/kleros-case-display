"use client";

import { getSdk } from "@generated/graphql";
import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

export const sdk = getSdk(
  new GraphQLClient(process.env.NEXT_PUBLIC_SUBGRAPH_ENDPOINT!)
);

const useSubgraph = (key: keyof typeof sdk, id: string) =>
  useSWR([key, id], async () => await sdk[key]({ id })).data;

export default useSubgraph;
