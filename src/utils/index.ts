import axios from "axios";
import { isAddress } from "ethers";

export const ipfs = (uri: string) =>
  `${process.env.NEXT_PUBLIC_IPFS_ENDPOINT}${uri}`;

export const ipfsFetcher = async <T>(ipfsURI: string): Promise<T> => {
  const res = await axios.get(ipfs(ipfsURI));
  return res.data;
};

export const explorerLink = (address: string) =>
  `${process.env.NEXT_PUBLIC_EXPLORER_ENDPOINT}/address/${address}`;

export const justificationsLink = (disputeId: number, appeal: number) =>
  `${process.env.JUSTIFICATIONS_ENDPOINT}&disputeId=${disputeId}&round=${appeal}`;

export function shortenAddress(address: string, chars = 4) {
  const parsed = isAddress(address);
  if (!parsed) throw Error(`Invalid 'address' parameter '${address}'.`);

  return `${address.substring(0, chars + 1)}...${address.substring(
    42 - chars
  )}`;
}

export const regex = {
  url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
}
