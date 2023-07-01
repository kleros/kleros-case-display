import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
};

export type ArbitrableHistory = {
  __typename?: 'ArbitrableHistory';
  disputes: Array<Dispute>;
  id: Scalars['ID']['output'];
  metaEvidence: Scalars['String']['output'];
};


export type ArbitrableHistoryDisputesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Dispute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Dispute_Filter>;
};

export type ArbitrableHistory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ArbitrableHistory_Filter>>>;
  disputes_?: InputMaybe<Dispute_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  metaEvidence?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_contains?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_ends_with?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_gt?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_gte?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metaEvidence_lt?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_lte?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_not?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metaEvidence_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaEvidence_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ArbitrableHistory_Filter>>>;
};

export enum ArbitrableHistory_OrderBy {
  Disputes = 'disputes',
  Id = 'id',
  MetaEvidence = 'metaEvidence'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Dispute = {
  __typename?: 'Dispute';
  arbitrableHistory?: Maybe<ArbitrableHistory>;
  arbitrated: Scalars['Bytes']['output'];
  createdAtBlock: Scalars['BigInt']['output'];
  evidenceGroup?: Maybe<EvidenceGroup>;
  id: Scalars['ID']['output'];
  lastPeriodChange: Scalars['BigInt']['output'];
  metaEvidenceId: Scalars['BigInt']['output'];
  period: Period;
  ruled: Scalars['Boolean']['output'];
  ruling: Scalars['BigInt']['output'];
};

export type Dispute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Dispute_Filter>>>;
  arbitrableHistory?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_?: InputMaybe<ArbitrableHistory_Filter>;
  arbitrableHistory_contains?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_ends_with?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_gt?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_gte?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_in?: InputMaybe<Array<Scalars['String']['input']>>;
  arbitrableHistory_lt?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_lte?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_not?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_not_contains?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  arbitrableHistory_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_starts_with?: InputMaybe<Scalars['String']['input']>;
  arbitrableHistory_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrated?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrated_contains?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrated_gt?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrated_gte?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrated_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  arbitrated_lt?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrated_lte?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrated_not?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrated_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrated_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  evidenceGroup_?: InputMaybe<EvidenceGroup_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastPeriodChange?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChange_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChange_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChange_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPeriodChange_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChange_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChange_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChange_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  metaEvidenceId?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  metaEvidenceId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_not?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Dispute_Filter>>>;
  period?: InputMaybe<Period>;
  period_in?: InputMaybe<Array<Period>>;
  period_not?: InputMaybe<Period>;
  period_not_in?: InputMaybe<Array<Period>>;
  ruled?: InputMaybe<Scalars['Boolean']['input']>;
  ruled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  ruled_not?: InputMaybe<Scalars['Boolean']['input']>;
  ruled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  ruling?: InputMaybe<Scalars['BigInt']['input']>;
  ruling_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ruling_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ruling_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ruling_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ruling_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ruling_not?: InputMaybe<Scalars['BigInt']['input']>;
  ruling_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Dispute_OrderBy {
  ArbitrableHistory = 'arbitrableHistory',
  ArbitrableHistoryId = 'arbitrableHistory__id',
  ArbitrableHistoryMetaEvidence = 'arbitrableHistory__metaEvidence',
  Arbitrated = 'arbitrated',
  CreatedAtBlock = 'createdAtBlock',
  EvidenceGroup = 'evidenceGroup',
  EvidenceGroupId = 'evidenceGroup__id',
  EvidenceGroupLength = 'evidenceGroup__length',
  Id = 'id',
  LastPeriodChange = 'lastPeriodChange',
  MetaEvidenceId = 'metaEvidenceId',
  Period = 'period',
  Ruled = 'ruled',
  Ruling = 'ruling'
}

export type Evidence = {
  __typename?: 'Evidence';
  URI: Scalars['String']['output'];
  creationTime: Scalars['BigInt']['output'];
  group: EvidenceGroup;
  id: Scalars['ID']['output'];
  sender: Scalars['Bytes']['output'];
};

export type EvidenceGroup = {
  __typename?: 'EvidenceGroup';
  dispute: Dispute;
  evidence: Array<Evidence>;
  id: Scalars['ID']['output'];
  length: Scalars['BigInt']['output'];
};


export type EvidenceGroupEvidenceArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Evidence_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Evidence_Filter>;
};

export type EvidenceGroup_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EvidenceGroup_Filter>>>;
  dispute?: InputMaybe<Scalars['String']['input']>;
  dispute_?: InputMaybe<Dispute_Filter>;
  dispute_contains?: InputMaybe<Scalars['String']['input']>;
  dispute_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dispute_ends_with?: InputMaybe<Scalars['String']['input']>;
  dispute_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dispute_gt?: InputMaybe<Scalars['String']['input']>;
  dispute_gte?: InputMaybe<Scalars['String']['input']>;
  dispute_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dispute_lt?: InputMaybe<Scalars['String']['input']>;
  dispute_lte?: InputMaybe<Scalars['String']['input']>;
  dispute_not?: InputMaybe<Scalars['String']['input']>;
  dispute_not_contains?: InputMaybe<Scalars['String']['input']>;
  dispute_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dispute_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dispute_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dispute_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dispute_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  dispute_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dispute_starts_with?: InputMaybe<Scalars['String']['input']>;
  dispute_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  evidence_?: InputMaybe<Evidence_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  length?: InputMaybe<Scalars['BigInt']['input']>;
  length_gt?: InputMaybe<Scalars['BigInt']['input']>;
  length_gte?: InputMaybe<Scalars['BigInt']['input']>;
  length_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  length_lt?: InputMaybe<Scalars['BigInt']['input']>;
  length_lte?: InputMaybe<Scalars['BigInt']['input']>;
  length_not?: InputMaybe<Scalars['BigInt']['input']>;
  length_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EvidenceGroup_Filter>>>;
};

export enum EvidenceGroup_OrderBy {
  Dispute = 'dispute',
  DisputeArbitrated = 'dispute__arbitrated',
  DisputeCreatedAtBlock = 'dispute__createdAtBlock',
  DisputeId = 'dispute__id',
  DisputeLastPeriodChange = 'dispute__lastPeriodChange',
  DisputeMetaEvidenceId = 'dispute__metaEvidenceId',
  DisputePeriod = 'dispute__period',
  DisputeRuled = 'dispute__ruled',
  DisputeRuling = 'dispute__ruling',
  Evidence = 'evidence',
  Id = 'id',
  Length = 'length'
}

export type Evidence_Filter = {
  URI?: InputMaybe<Scalars['String']['input']>;
  URI_contains?: InputMaybe<Scalars['String']['input']>;
  URI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  URI_ends_with?: InputMaybe<Scalars['String']['input']>;
  URI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  URI_gt?: InputMaybe<Scalars['String']['input']>;
  URI_gte?: InputMaybe<Scalars['String']['input']>;
  URI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  URI_lt?: InputMaybe<Scalars['String']['input']>;
  URI_lte?: InputMaybe<Scalars['String']['input']>;
  URI_not?: InputMaybe<Scalars['String']['input']>;
  URI_not_contains?: InputMaybe<Scalars['String']['input']>;
  URI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  URI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  URI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  URI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  URI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  URI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  URI_starts_with?: InputMaybe<Scalars['String']['input']>;
  URI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Evidence_Filter>>>;
  creationTime?: InputMaybe<Scalars['BigInt']['input']>;
  creationTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creationTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  creationTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  group?: InputMaybe<Scalars['String']['input']>;
  group_?: InputMaybe<EvidenceGroup_Filter>;
  group_contains?: InputMaybe<Scalars['String']['input']>;
  group_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  group_ends_with?: InputMaybe<Scalars['String']['input']>;
  group_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  group_gt?: InputMaybe<Scalars['String']['input']>;
  group_gte?: InputMaybe<Scalars['String']['input']>;
  group_in?: InputMaybe<Array<Scalars['String']['input']>>;
  group_lt?: InputMaybe<Scalars['String']['input']>;
  group_lte?: InputMaybe<Scalars['String']['input']>;
  group_not?: InputMaybe<Scalars['String']['input']>;
  group_not_contains?: InputMaybe<Scalars['String']['input']>;
  group_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  group_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  group_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  group_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  group_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  group_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  group_starts_with?: InputMaybe<Scalars['String']['input']>;
  group_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Evidence_Filter>>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Evidence_OrderBy {
  Uri = 'URI',
  CreationTime = 'creationTime',
  Group = 'group',
  GroupId = 'group__id',
  GroupLength = 'group__length',
  Id = 'id',
  Sender = 'sender'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Period {
  Appeal = 'APPEAL',
  Commit = 'COMMIT',
  Evidence = 'EVIDENCE',
  Execution = 'EXECUTION',
  Vote = 'VOTE'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  arbitrableHistories: Array<ArbitrableHistory>;
  arbitrableHistory?: Maybe<ArbitrableHistory>;
  dispute?: Maybe<Dispute>;
  disputes: Array<Dispute>;
  evidence?: Maybe<Evidence>;
  evidenceGroup?: Maybe<EvidenceGroup>;
  evidenceGroups: Array<EvidenceGroup>;
  evidences: Array<Evidence>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryArbitrableHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ArbitrableHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ArbitrableHistory_Filter>;
};


export type QueryArbitrableHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDisputeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDisputesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Dispute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dispute_Filter>;
};


export type QueryEvidenceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEvidenceGroupArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEvidenceGroupsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EvidenceGroup_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EvidenceGroup_Filter>;
};


export type QueryEvidencesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Evidence_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Evidence_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  arbitrableHistories: Array<ArbitrableHistory>;
  arbitrableHistory?: Maybe<ArbitrableHistory>;
  dispute?: Maybe<Dispute>;
  disputes: Array<Dispute>;
  evidence?: Maybe<Evidence>;
  evidenceGroup?: Maybe<EvidenceGroup>;
  evidenceGroups: Array<EvidenceGroup>;
  evidences: Array<Evidence>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionArbitrableHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ArbitrableHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ArbitrableHistory_Filter>;
};


export type SubscriptionArbitrableHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDisputeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDisputesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Dispute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dispute_Filter>;
};


export type SubscriptionEvidenceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEvidenceGroupArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEvidenceGroupsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EvidenceGroup_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EvidenceGroup_Filter>;
};


export type SubscriptionEvidencesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Evidence_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Evidence_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type DisputeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DisputeQuery = { __typename?: 'Query', dispute?: { __typename?: 'Dispute', arbitrated: any, metaEvidenceId: any, ruling: any, ruled: boolean, period: Period, lastPeriodChange: any, createdAtBlock: any, arbitrableHistory?: { __typename?: 'ArbitrableHistory', metaEvidence: string } | null, evidenceGroup?: { __typename?: 'EvidenceGroup', length: any, evidence: Array<{ __typename?: 'Evidence', creationTime: any, URI: string, sender: any }> } | null } | null };


export const DisputeDocument = gql`
    query Dispute($id: ID!) {
  dispute(id: $id) {
    arbitrated
    metaEvidenceId
    arbitrableHistory {
      metaEvidence
    }
    ruling
    ruled
    period
    lastPeriodChange
    createdAtBlock
    evidenceGroup {
      length
      evidence {
        creationTime
        URI
        sender
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Dispute(variables: DisputeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DisputeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DisputeQuery>(DisputeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Dispute', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;