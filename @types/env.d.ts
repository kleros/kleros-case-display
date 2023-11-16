declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JUSTIFICATIONS_ENDPOINT: string;
      SUBGRAPH_ENDPOINT: string;
      NEXT_PUBLIC_SUBGRAPH_ENDPOINT: string;
      LOGTAIL_SOURCE_TOKEN: string;
      NEXT_PUBLIC_RPC_ENDPOINT: string;
      NEXT_PUBLIC_IPFS_ENDPOINT: string;
      NEXT_PUBLIC_EXPLORER_ENDPOINT: string;
      NEXT_PUBLIC_CHAIN_ID: string;
      NEXT_PUBLIC_ARBITRABLE_URL: string;
      NEXT_PUBLIC_START_BLOCK: string;
    }
  }
}

export {}
