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
  id: Scalars['Bytes']['output'];
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
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export type Counter = {
  __typename?: 'Counter';
  counter: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
};

export type Counter_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Counter_Filter>>>;
  counter?: InputMaybe<Scalars['BigInt']['input']>;
  counter_gt?: InputMaybe<Scalars['BigInt']['input']>;
  counter_gte?: InputMaybe<Scalars['BigInt']['input']>;
  counter_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  counter_lt?: InputMaybe<Scalars['BigInt']['input']>;
  counter_lte?: InputMaybe<Scalars['BigInt']['input']>;
  counter_not?: InputMaybe<Scalars['BigInt']['input']>;
  counter_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Counter_Filter>>>;
};

export enum Counter_OrderBy {
  Counter = 'counter',
  Id = 'id'
}

export type Court = {
  __typename?: 'Court';
  description?: Maybe<Scalars['String']['output']>;
  hiddenVotes?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  policy?: Maybe<Scalars['String']['output']>;
  requiredSkills?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  timesPerPeriod?: Maybe<Array<Scalars['BigInt']['output']>>;
};

export type Court_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Court_Filter>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hiddenVotes?: InputMaybe<Scalars['Boolean']['input']>;
  hiddenVotes_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hiddenVotes_not?: InputMaybe<Scalars['Boolean']['input']>;
  hiddenVotes_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Court_Filter>>>;
  policy?: InputMaybe<Scalars['String']['input']>;
  policy_contains?: InputMaybe<Scalars['String']['input']>;
  policy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  policy_ends_with?: InputMaybe<Scalars['String']['input']>;
  policy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  policy_gt?: InputMaybe<Scalars['String']['input']>;
  policy_gte?: InputMaybe<Scalars['String']['input']>;
  policy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  policy_lt?: InputMaybe<Scalars['String']['input']>;
  policy_lte?: InputMaybe<Scalars['String']['input']>;
  policy_not?: InputMaybe<Scalars['String']['input']>;
  policy_not_contains?: InputMaybe<Scalars['String']['input']>;
  policy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  policy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  policy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  policy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  policy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  policy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  policy_starts_with?: InputMaybe<Scalars['String']['input']>;
  policy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requiredSkills?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_contains?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_ends_with?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_gt?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_gte?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requiredSkills_lt?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_lte?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_not?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_not_contains?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requiredSkills_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_starts_with?: InputMaybe<Scalars['String']['input']>;
  requiredSkills_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  summary_contains?: InputMaybe<Scalars['String']['input']>;
  summary_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  summary_ends_with?: InputMaybe<Scalars['String']['input']>;
  summary_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  summary_gt?: InputMaybe<Scalars['String']['input']>;
  summary_gte?: InputMaybe<Scalars['String']['input']>;
  summary_in?: InputMaybe<Array<Scalars['String']['input']>>;
  summary_lt?: InputMaybe<Scalars['String']['input']>;
  summary_lte?: InputMaybe<Scalars['String']['input']>;
  summary_not?: InputMaybe<Scalars['String']['input']>;
  summary_not_contains?: InputMaybe<Scalars['String']['input']>;
  summary_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  summary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  summary_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  summary_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  summary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  summary_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  summary_starts_with?: InputMaybe<Scalars['String']['input']>;
  summary_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timesPerPeriod?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesPerPeriod_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesPerPeriod_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesPerPeriod_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesPerPeriod_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesPerPeriod_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Court_OrderBy {
  Description = 'description',
  HiddenVotes = 'hiddenVotes',
  Id = 'id',
  Name = 'name',
  Policy = 'policy',
  RequiredSkills = 'requiredSkills',
  Summary = 'summary',
  TimesPerPeriod = 'timesPerPeriod'
}

export type Dispute = {
  __typename?: 'Dispute';
  arbitrableHistory?: Maybe<ArbitrableHistory>;
  arbitrated: Scalars['Bytes']['output'];
  court: Court;
  createdAtBlock: Scalars['BigInt']['output'];
  currentRound: Round;
  disputeIDNumber: Scalars['BigInt']['output'];
  evidenceGroup: EvidenceGroup;
  id: Scalars['ID']['output'];
  lastPeriodChangeBlock: Scalars['BigInt']['output'];
  lastPeriodChangeTs: Scalars['BigInt']['output'];
  metaEvidenceId: Scalars['BigInt']['output'];
  nbChoices: Scalars['BigInt']['output'];
  nbRounds: Scalars['BigInt']['output'];
  period: Period;
  periodDeadline: Scalars['BigInt']['output'];
  periodNotificationIndex: Scalars['BigInt']['output'];
  rounds: Array<Round>;
  ruled: Scalars['Boolean']['output'];
  ruling: Scalars['BigInt']['output'];
};


export type DisputeRoundsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Round_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Round_Filter>;
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
  court?: InputMaybe<Scalars['String']['input']>;
  court_?: InputMaybe<Court_Filter>;
  court_contains?: InputMaybe<Scalars['String']['input']>;
  court_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  court_ends_with?: InputMaybe<Scalars['String']['input']>;
  court_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  court_gt?: InputMaybe<Scalars['String']['input']>;
  court_gte?: InputMaybe<Scalars['String']['input']>;
  court_in?: InputMaybe<Array<Scalars['String']['input']>>;
  court_lt?: InputMaybe<Scalars['String']['input']>;
  court_lte?: InputMaybe<Scalars['String']['input']>;
  court_not?: InputMaybe<Scalars['String']['input']>;
  court_not_contains?: InputMaybe<Scalars['String']['input']>;
  court_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  court_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  court_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  court_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  court_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  court_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  court_starts_with?: InputMaybe<Scalars['String']['input']>;
  court_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentRound?: InputMaybe<Scalars['String']['input']>;
  currentRound_?: InputMaybe<Round_Filter>;
  currentRound_contains?: InputMaybe<Scalars['String']['input']>;
  currentRound_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentRound_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentRound_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentRound_gt?: InputMaybe<Scalars['String']['input']>;
  currentRound_gte?: InputMaybe<Scalars['String']['input']>;
  currentRound_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentRound_lt?: InputMaybe<Scalars['String']['input']>;
  currentRound_lte?: InputMaybe<Scalars['String']['input']>;
  currentRound_not?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentRound_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentRound_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentRound_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  disputeIDNumber?: InputMaybe<Scalars['BigInt']['input']>;
  disputeIDNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  disputeIDNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  disputeIDNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  disputeIDNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  disputeIDNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  disputeIDNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  disputeIDNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  evidenceGroup_?: InputMaybe<EvidenceGroup_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastPeriodChangeBlock?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPeriodChangeBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPeriodChangeTs?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeTs_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeTs_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeTs_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPeriodChangeTs_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeTs_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeTs_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastPeriodChangeTs_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  metaEvidenceId?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  metaEvidenceId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_not?: InputMaybe<Scalars['BigInt']['input']>;
  metaEvidenceId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nbChoices?: InputMaybe<Scalars['BigInt']['input']>;
  nbChoices_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nbChoices_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nbChoices_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nbChoices_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nbChoices_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nbChoices_not?: InputMaybe<Scalars['BigInt']['input']>;
  nbChoices_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nbRounds?: InputMaybe<Scalars['BigInt']['input']>;
  nbRounds_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nbRounds_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nbRounds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nbRounds_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nbRounds_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nbRounds_not?: InputMaybe<Scalars['BigInt']['input']>;
  nbRounds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Dispute_Filter>>>;
  period?: InputMaybe<Period>;
  periodDeadline?: InputMaybe<Scalars['BigInt']['input']>;
  periodDeadline_gt?: InputMaybe<Scalars['BigInt']['input']>;
  periodDeadline_gte?: InputMaybe<Scalars['BigInt']['input']>;
  periodDeadline_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodDeadline_lt?: InputMaybe<Scalars['BigInt']['input']>;
  periodDeadline_lte?: InputMaybe<Scalars['BigInt']['input']>;
  periodDeadline_not?: InputMaybe<Scalars['BigInt']['input']>;
  periodDeadline_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodNotificationIndex?: InputMaybe<Scalars['BigInt']['input']>;
  periodNotificationIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  periodNotificationIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  periodNotificationIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periodNotificationIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  periodNotificationIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  periodNotificationIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  periodNotificationIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  period_in?: InputMaybe<Array<Period>>;
  period_not?: InputMaybe<Period>;
  period_not_in?: InputMaybe<Array<Period>>;
  rounds_?: InputMaybe<Round_Filter>;
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
  Court = 'court',
  CourtDescription = 'court__description',
  CourtHiddenVotes = 'court__hiddenVotes',
  CourtId = 'court__id',
  CourtName = 'court__name',
  CourtPolicy = 'court__policy',
  CourtRequiredSkills = 'court__requiredSkills',
  CourtSummary = 'court__summary',
  CreatedAtBlock = 'createdAtBlock',
  CurrentRound = 'currentRound',
  CurrentRoundId = 'currentRound__id',
  CurrentRoundIsCurrentRound = 'currentRound__isCurrentRound',
  CurrentRoundRound = 'currentRound__round',
  DisputeIdNumber = 'disputeIDNumber',
  EvidenceGroup = 'evidenceGroup',
  EvidenceGroupId = 'evidenceGroup__id',
  EvidenceGroupLength = 'evidenceGroup__length',
  Id = 'id',
  LastPeriodChangeBlock = 'lastPeriodChangeBlock',
  LastPeriodChangeTs = 'lastPeriodChangeTs',
  MetaEvidenceId = 'metaEvidenceId',
  NbChoices = 'nbChoices',
  NbRounds = 'nbRounds',
  Period = 'period',
  PeriodDeadline = 'periodDeadline',
  PeriodNotificationIndex = 'periodNotificationIndex',
  Rounds = 'rounds',
  Ruled = 'ruled',
  Ruling = 'ruling'
}

export type Draw = {
  __typename?: 'Draw';
  /** Lucky juror who got drawn */
  address: Scalars['Bytes']['output'];
  /** Number of the round */
  appeal: Scalars['BigInt']['output'];
  /** Number of the dispute */
  disputeID: Scalars['BigInt']['output'];
  /** disputeID-appeal-voteID */
  id: Scalars['ID']['output'];
  /** Number of the vote */
  voteID: Scalars['BigInt']['output'];
};

export type Draw_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Draw_Filter>>>;
  appeal?: InputMaybe<Scalars['BigInt']['input']>;
  appeal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  appeal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  appeal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  appeal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  appeal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  appeal_not?: InputMaybe<Scalars['BigInt']['input']>;
  appeal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  disputeID?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  disputeID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_not?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Draw_Filter>>>;
  voteID?: InputMaybe<Scalars['BigInt']['input']>;
  voteID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteID_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Draw_OrderBy {
  Address = 'address',
  Appeal = 'appeal',
  DisputeId = 'disputeID',
  Id = 'id',
  VoteId = 'voteID'
}

export type Evidence = {
  __typename?: 'Evidence';
  URI: Scalars['String']['output'];
  creationTime: Scalars['BigInt']['output'];
  group: EvidenceGroup;
  id: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
};

export type EvidenceGroup = {
  __typename?: 'EvidenceGroup';
  dispute?: Maybe<Dispute>;
  evidence: Array<Evidence>;
  id: Scalars['Bytes']['output'];
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
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  DisputeDisputeIdNumber = 'dispute__disputeIDNumber',
  DisputeId = 'dispute__id',
  DisputeLastPeriodChangeBlock = 'dispute__lastPeriodChangeBlock',
  DisputeLastPeriodChangeTs = 'dispute__lastPeriodChangeTs',
  DisputeMetaEvidenceId = 'dispute__metaEvidenceId',
  DisputeNbChoices = 'dispute__nbChoices',
  DisputeNbRounds = 'dispute__nbRounds',
  DisputePeriod = 'dispute__period',
  DisputePeriodDeadline = 'dispute__periodDeadline',
  DisputePeriodNotificationIndex = 'dispute__periodNotificationIndex',
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
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  Executed = 'EXECUTED',
  Vote = 'VOTE'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  arbitrableHistories: Array<ArbitrableHistory>;
  arbitrableHistory?: Maybe<ArbitrableHistory>;
  counter?: Maybe<Counter>;
  counters: Array<Counter>;
  court?: Maybe<Court>;
  courts: Array<Court>;
  dispute?: Maybe<Dispute>;
  disputes: Array<Dispute>;
  draw?: Maybe<Draw>;
  draws: Array<Draw>;
  evidence?: Maybe<Evidence>;
  evidenceGroup?: Maybe<EvidenceGroup>;
  evidenceGroups: Array<EvidenceGroup>;
  evidences: Array<Evidence>;
  round?: Maybe<Round>;
  rounds: Array<Round>;
  tokenAndETHShift?: Maybe<TokenAndEthShift>;
  tokenAndETHShifts: Array<TokenAndEthShift>;
  userDisputeInfo?: Maybe<UserDisputeInfo>;
  userDisputeInfos: Array<UserDisputeInfo>;
  userRoundInfo?: Maybe<UserRoundInfo>;
  userRoundInfos: Array<UserRoundInfo>;
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


export type QueryCounterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCountersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Counter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Counter_Filter>;
};


export type QueryCourtArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCourtsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Court_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Court_Filter>;
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


export type QueryDrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Draw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Draw_Filter>;
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


export type QueryRoundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Round_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Round_Filter>;
};


export type QueryTokenAndEthShiftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenAndEthShiftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenAndEthShift_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenAndEthShift_Filter>;
};


export type QueryUserDisputeInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserDisputeInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserDisputeInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserDisputeInfo_Filter>;
};


export type QueryUserRoundInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserRoundInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserRoundInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserRoundInfo_Filter>;
};

export type Round = {
  __typename?: 'Round';
  dispute: Dispute;
  id: Scalars['Bytes']['output'];
  isCurrentRound: Scalars['Boolean']['output'];
  jurors: Array<Scalars['Bytes']['output']>;
  round: Scalars['BigInt']['output'];
};

export type Round_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Round_Filter>>>;
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
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isCurrentRound?: InputMaybe<Scalars['Boolean']['input']>;
  isCurrentRound_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isCurrentRound_not?: InputMaybe<Scalars['Boolean']['input']>;
  isCurrentRound_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  jurors?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  jurors_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  jurors_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  jurors_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  jurors_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  jurors_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Round_Filter>>>;
  round?: InputMaybe<Scalars['BigInt']['input']>;
  round_gt?: InputMaybe<Scalars['BigInt']['input']>;
  round_gte?: InputMaybe<Scalars['BigInt']['input']>;
  round_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  round_lt?: InputMaybe<Scalars['BigInt']['input']>;
  round_lte?: InputMaybe<Scalars['BigInt']['input']>;
  round_not?: InputMaybe<Scalars['BigInt']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Round_OrderBy {
  Dispute = 'dispute',
  DisputeArbitrated = 'dispute__arbitrated',
  DisputeCreatedAtBlock = 'dispute__createdAtBlock',
  DisputeDisputeIdNumber = 'dispute__disputeIDNumber',
  DisputeId = 'dispute__id',
  DisputeLastPeriodChangeBlock = 'dispute__lastPeriodChangeBlock',
  DisputeLastPeriodChangeTs = 'dispute__lastPeriodChangeTs',
  DisputeMetaEvidenceId = 'dispute__metaEvidenceId',
  DisputeNbChoices = 'dispute__nbChoices',
  DisputeNbRounds = 'dispute__nbRounds',
  DisputePeriod = 'dispute__period',
  DisputePeriodDeadline = 'dispute__periodDeadline',
  DisputePeriodNotificationIndex = 'dispute__periodNotificationIndex',
  DisputeRuled = 'dispute__ruled',
  DisputeRuling = 'dispute__ruling',
  Id = 'id',
  IsCurrentRound = 'isCurrentRound',
  Jurors = 'jurors',
  Round = 'round'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  arbitrableHistories: Array<ArbitrableHistory>;
  arbitrableHistory?: Maybe<ArbitrableHistory>;
  counter?: Maybe<Counter>;
  counters: Array<Counter>;
  court?: Maybe<Court>;
  courts: Array<Court>;
  dispute?: Maybe<Dispute>;
  disputes: Array<Dispute>;
  draw?: Maybe<Draw>;
  draws: Array<Draw>;
  evidence?: Maybe<Evidence>;
  evidenceGroup?: Maybe<EvidenceGroup>;
  evidenceGroups: Array<EvidenceGroup>;
  evidences: Array<Evidence>;
  round?: Maybe<Round>;
  rounds: Array<Round>;
  tokenAndETHShift?: Maybe<TokenAndEthShift>;
  tokenAndETHShifts: Array<TokenAndEthShift>;
  userDisputeInfo?: Maybe<UserDisputeInfo>;
  userDisputeInfos: Array<UserDisputeInfo>;
  userRoundInfo?: Maybe<UserRoundInfo>;
  userRoundInfos: Array<UserRoundInfo>;
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


export type SubscriptionCounterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCountersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Counter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Counter_Filter>;
};


export type SubscriptionCourtArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCourtsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Court_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Court_Filter>;
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


export type SubscriptionDrawArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDrawsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Draw_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Draw_Filter>;
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


export type SubscriptionRoundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Round_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Round_Filter>;
};


export type SubscriptionTokenAndEthShiftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenAndEthShiftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenAndEthShift_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenAndEthShift_Filter>;
};


export type SubscriptionUserDisputeInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserDisputeInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserDisputeInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserDisputeInfo_Filter>;
};


export type SubscriptionUserRoundInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserRoundInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserRoundInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserRoundInfo_Filter>;
};

export type TokenAndEthShift = {
  __typename?: 'TokenAndETHShift';
  ETHAmount: Scalars['BigInt']['output'];
  address: Scalars['Bytes']['output'];
  disputeID: Scalars['BigInt']['output'];
  /** disputeId-address-(discriminator) */
  id: Scalars['ID']['output'];
  tokenAmount: Scalars['BigInt']['output'];
};

export type TokenAndEthShift_Filter = {
  ETHAmount?: InputMaybe<Scalars['BigInt']['input']>;
  ETHAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ETHAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ETHAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ETHAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ETHAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ETHAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  ETHAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TokenAndEthShift_Filter>>>;
  disputeID?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  disputeID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_not?: InputMaybe<Scalars['BigInt']['input']>;
  disputeID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenAndEthShift_Filter>>>;
  tokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TokenAndEthShift_OrderBy {
  EthAmount = 'ETHAmount',
  Address = 'address',
  DisputeId = 'disputeID',
  Id = 'id',
  TokenAmount = 'tokenAmount'
}

export type UserDisputeInfo = {
  __typename?: 'UserDisputeInfo';
  dispute: Dispute;
  id: Scalars['String']['output'];
  juror: Scalars['String']['output'];
};

export type UserDisputeInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserDisputeInfo_Filter>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  juror?: InputMaybe<Scalars['String']['input']>;
  juror_contains?: InputMaybe<Scalars['String']['input']>;
  juror_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  juror_ends_with?: InputMaybe<Scalars['String']['input']>;
  juror_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  juror_gt?: InputMaybe<Scalars['String']['input']>;
  juror_gte?: InputMaybe<Scalars['String']['input']>;
  juror_in?: InputMaybe<Array<Scalars['String']['input']>>;
  juror_lt?: InputMaybe<Scalars['String']['input']>;
  juror_lte?: InputMaybe<Scalars['String']['input']>;
  juror_not?: InputMaybe<Scalars['String']['input']>;
  juror_not_contains?: InputMaybe<Scalars['String']['input']>;
  juror_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  juror_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  juror_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  juror_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  juror_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  juror_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  juror_starts_with?: InputMaybe<Scalars['String']['input']>;
  juror_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<UserDisputeInfo_Filter>>>;
};

export enum UserDisputeInfo_OrderBy {
  Dispute = 'dispute',
  DisputeArbitrated = 'dispute__arbitrated',
  DisputeCreatedAtBlock = 'dispute__createdAtBlock',
  DisputeDisputeIdNumber = 'dispute__disputeIDNumber',
  DisputeId = 'dispute__id',
  DisputeLastPeriodChangeBlock = 'dispute__lastPeriodChangeBlock',
  DisputeLastPeriodChangeTs = 'dispute__lastPeriodChangeTs',
  DisputeMetaEvidenceId = 'dispute__metaEvidenceId',
  DisputeNbChoices = 'dispute__nbChoices',
  DisputeNbRounds = 'dispute__nbRounds',
  DisputePeriod = 'dispute__period',
  DisputePeriodDeadline = 'dispute__periodDeadline',
  DisputePeriodNotificationIndex = 'dispute__periodNotificationIndex',
  DisputeRuled = 'dispute__ruled',
  DisputeRuling = 'dispute__ruling',
  Id = 'id',
  Juror = 'juror'
}

export type UserRoundInfo = {
  __typename?: 'UserRoundInfo';
  dispute: Dispute;
  drawNotificationIndex: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  juror: Scalars['String']['output'];
  round: Round;
};

export type UserRoundInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserRoundInfo_Filter>>>;
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
  drawNotificationIndex?: InputMaybe<Scalars['BigInt']['input']>;
  drawNotificationIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  drawNotificationIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  drawNotificationIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  drawNotificationIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  drawNotificationIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  drawNotificationIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  drawNotificationIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  juror?: InputMaybe<Scalars['String']['input']>;
  juror_contains?: InputMaybe<Scalars['String']['input']>;
  juror_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  juror_ends_with?: InputMaybe<Scalars['String']['input']>;
  juror_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  juror_gt?: InputMaybe<Scalars['String']['input']>;
  juror_gte?: InputMaybe<Scalars['String']['input']>;
  juror_in?: InputMaybe<Array<Scalars['String']['input']>>;
  juror_lt?: InputMaybe<Scalars['String']['input']>;
  juror_lte?: InputMaybe<Scalars['String']['input']>;
  juror_not?: InputMaybe<Scalars['String']['input']>;
  juror_not_contains?: InputMaybe<Scalars['String']['input']>;
  juror_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  juror_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  juror_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  juror_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  juror_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  juror_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  juror_starts_with?: InputMaybe<Scalars['String']['input']>;
  juror_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<UserRoundInfo_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRoundInfo_OrderBy {
  Dispute = 'dispute',
  DisputeArbitrated = 'dispute__arbitrated',
  DisputeCreatedAtBlock = 'dispute__createdAtBlock',
  DisputeDisputeIdNumber = 'dispute__disputeIDNumber',
  DisputeId = 'dispute__id',
  DisputeLastPeriodChangeBlock = 'dispute__lastPeriodChangeBlock',
  DisputeLastPeriodChangeTs = 'dispute__lastPeriodChangeTs',
  DisputeMetaEvidenceId = 'dispute__metaEvidenceId',
  DisputeNbChoices = 'dispute__nbChoices',
  DisputeNbRounds = 'dispute__nbRounds',
  DisputePeriod = 'dispute__period',
  DisputePeriodDeadline = 'dispute__periodDeadline',
  DisputePeriodNotificationIndex = 'dispute__periodNotificationIndex',
  DisputeRuled = 'dispute__ruled',
  DisputeRuling = 'dispute__ruling',
  DrawNotificationIndex = 'drawNotificationIndex',
  Id = 'id',
  Juror = 'juror',
  Round = 'round',
  RoundId = 'round__id',
  RoundIsCurrentRound = 'round__isCurrentRound',
  RoundRound = 'round__round'
}

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
  disputeID: Scalars['BigInt']['input'];
}>;


export type DisputeQuery = { __typename?: 'Query', dispute?: { __typename?: 'Dispute', arbitrated: any, metaEvidenceId: any, ruled: boolean, ruling: any, period: Period, nbChoices: any, lastPeriodChangeTs: any, createdAtBlock: any, arbitrableHistory?: { __typename?: 'ArbitrableHistory', metaEvidence: string } | null, evidenceGroup: { __typename?: 'EvidenceGroup', length: any, evidence: Array<{ __typename?: 'Evidence', creationTime: any, URI: string, sender: any }> } } | null, draws: Array<{ __typename?: 'Draw', address: any }> };


export const DisputeDocument = gql`
    query Dispute($id: ID!, $disputeID: BigInt!) {
  dispute(id: $id) {
    arbitrated
    metaEvidenceId
    arbitrableHistory {
      metaEvidence
    }
    ruled
    ruling
    period
    nbChoices
    lastPeriodChangeTs
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
  draws(where: {disputeID: $disputeID, appeal: 0}) {
    address
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