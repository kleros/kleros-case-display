import { isAddress } from "ethers";

export const ipfs = (uri: string) =>
  `${process.env.NEXT_PUBLIC_IPFS_ENDPOINT}${uri}`;

export const explorerLink = (address: string) =>
  `${process.env.NEXT_PUBLIC_EXPLORER_ENDPOINT}/address/${address}`;

export const justificationsLink = (disputeId: number, appeal: number) =>
  `${process.env.NEXT_PUBLIC_JUSTIFICATIONS_ENDPOINT}&disputeID=${disputeId}&appeal=${appeal}`;

export function shortenAddress(address: string, chars = 4) {
  const parsed = isAddress(address);
  if (!parsed) throw Error(`Invalid 'address' parameter '${address}'.`);

  return `${address.substring(0, chars + 1)}...${address.substring(
    42 - chars
  )}`;
}
