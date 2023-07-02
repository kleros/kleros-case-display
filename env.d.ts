declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUBGRAPH_ENDPOINT: string;
      NEXT_PUBLIC_IPFS_ENDPOINT: string;
      NEXT_PUBLIC_EXPLORER_ENDPOINT: string;
      NEXT_PUBLIC_JUSTIFICATIONS_ENDPOINT: string;
      NEXT_PUBLIC_RPC_ENDPOINT: string;
      NEXT_PUBLIC_CHAIN_ID: string;
      NEXT_PUBLIC_ARBITRABLE_URL: string;
      NEXT_PUBLIC_START_BLOCK: string;
    }
  }
}

export {}
