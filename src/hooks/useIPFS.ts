import { ipfs } from "@utils";
import axios from "axios";
import useSWR from "swr";

const ipfsFetcher = async (ipfsURI: string) =>
  (await axios.get(ipfs(ipfsURI))).data;

const useIPFS = <T>(uri?: string | null | false): [T | undefined, Error] => {
  const { data, error } = useSWR(uri || null, ipfsFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return [data, error];
};

export default useIPFS;
