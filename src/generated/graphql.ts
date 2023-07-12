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

export type Activity = {
  __typename?: 'Activity';
  dispute: Dispute;
  id: Scalars['ID']['output'];
  juror: Juror;
  round: Round;
};

export type Activity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Activity_Filter>>>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  juror?: InputMaybe<Scalars['String']['input']>;
  juror_?: InputMaybe<Juror_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<Activity_Filter>>>;
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

export enum Activity_OrderBy {
  Dispute = 'dispute',
  DisputeCreatedAtBlock = 'dispute__createdAtBlock',
  DisputeId = 'dispute__id',
  DisputeLastPeriodChange = 'dispute__lastPeriodChange',
  DisputeMetaEvidenceId = 'dispute__metaEvidenceId',
  DisputeNbChoices = 'dispute__nbChoices',
  DisputeNbRounds = 'dispute__nbRounds',
  DisputePeriod = 'dispute__period',
  DisputeRuled = 'dispute__ruled',
  DisputeRuling = 'dispute__ruling',
  Id = 'id',
  Juror = 'juror',
  JurorId = 'juror__id',
  JurorNbDisputesAttended = 'juror__nbDisputesAttended',
  JurorTotalStaked = 'juror__totalStaked',
  JurorTotalVotesDrawn = 'juror__totalVotesDrawn',
  Round = 'round',
  RoundDrawnCount = 'round__drawnCount',
  RoundId = 'round__id',
  RoundIndex = 'round__index',
  RoundVotesCastedCount = 'round__votesCastedCount'
}

export type Arbitrable = {
  __typename?: 'Arbitrable';
  disputes: Array<Dispute>;
  firstInteractionBlock: Scalars['BigInt']['output'];
  firstInteractionTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  nbDisputes: Scalars['BigInt']['output'];
};


export type ArbitrableDisputesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Dispute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Dispute_Filter>;
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

export type Arbitrable_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrable_Filter>>>;
  disputes_?: InputMaybe<Dispute_Filter>;
  firstInteractionBlock?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  firstInteractionBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  firstInteractionTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  firstInteractionTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  firstInteractionTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  nbDisputes?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nbDisputes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputes_not?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrable_Filter>>>;
};

export enum Arbitrable_OrderBy {
  Disputes = 'disputes',
  FirstInteractionBlock = 'firstInteractionBlock',
  FirstInteractionTimestamp = 'firstInteractionTimestamp',
  Id = 'id',
  NbDisputes = 'nbDisputes'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Choice = {
  __typename?: 'Choice';
  id: Scalars['ID']['output'];
  index: Scalars['BigInt']['output'];
  round: Round;
  voteCount: Scalars['BigInt']['output'];
  votes: Array<Vote>;
};


export type ChoiceVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vote_Filter>;
};

export type Choice_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Choice_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  index_not?: InputMaybe<Scalars['BigInt']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Choice_Filter>>>;
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
  voteCount?: InputMaybe<Scalars['BigInt']['input']>;
  voteCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Choice_OrderBy {
  Id = 'id',
  Index = 'index',
  Round = 'round',
  RoundDrawnCount = 'round__drawnCount',
  RoundId = 'round__id',
  RoundIndex = 'round__index',
  RoundVotesCastedCount = 'round__votesCastedCount',
  VoteCount = 'voteCount',
  Votes = 'votes'
}

export type Dispute = {
  __typename?: 'Dispute';
  arbitrableHistory?: Maybe<ArbitrableHistory>;
  arbitrated: Arbitrable;
  createdAtBlock: Scalars['BigInt']['output'];
  evidenceGroup: EvidenceGroup;
  id: Scalars['ID']['output'];
  lastPeriodChange: Scalars['BigInt']['output'];
  metaEvidenceId: Scalars['BigInt']['output'];
  nbChoices: Scalars['BigInt']['output'];
  nbRounds: Scalars['BigInt']['output'];
  ongoing: Array<Activity>;
  penalties: Array<Penalty>;
  period: Period;
  rewards: Array<Reward>;
  rounds: Array<Round>;
  ruled: Scalars['Boolean']['output'];
  ruling: Scalars['BigInt']['output'];
};


export type DisputeOngoingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Activity_Filter>;
};


export type DisputePenaltiesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Penalty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Penalty_Filter>;
};


export type DisputeRewardsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Reward_Filter>;
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
  arbitrated?: InputMaybe<Scalars['String']['input']>;
  arbitrated_?: InputMaybe<Arbitrable_Filter>;
  arbitrated_contains?: InputMaybe<Scalars['String']['input']>;
  arbitrated_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrated_ends_with?: InputMaybe<Scalars['String']['input']>;
  arbitrated_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrated_gt?: InputMaybe<Scalars['String']['input']>;
  arbitrated_gte?: InputMaybe<Scalars['String']['input']>;
  arbitrated_in?: InputMaybe<Array<Scalars['String']['input']>>;
  arbitrated_lt?: InputMaybe<Scalars['String']['input']>;
  arbitrated_lte?: InputMaybe<Scalars['String']['input']>;
  arbitrated_not?: InputMaybe<Scalars['String']['input']>;
  arbitrated_not_contains?: InputMaybe<Scalars['String']['input']>;
  arbitrated_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrated_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  arbitrated_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrated_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  arbitrated_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  arbitrated_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrated_starts_with?: InputMaybe<Scalars['String']['input']>;
  arbitrated_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  ongoing_?: InputMaybe<Activity_Filter>;
  or?: InputMaybe<Array<InputMaybe<Dispute_Filter>>>;
  penalties_?: InputMaybe<Penalty_Filter>;
  period?: InputMaybe<Period>;
  period_in?: InputMaybe<Array<Period>>;
  period_not?: InputMaybe<Period>;
  period_not_in?: InputMaybe<Array<Period>>;
  rewards_?: InputMaybe<Reward_Filter>;
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
  ArbitratedFirstInteractionBlock = 'arbitrated__firstInteractionBlock',
  ArbitratedFirstInteractionTimestamp = 'arbitrated__firstInteractionTimestamp',
  ArbitratedId = 'arbitrated__id',
  ArbitratedNbDisputes = 'arbitrated__nbDisputes',
  CreatedAtBlock = 'createdAtBlock',
  EvidenceGroup = 'evidenceGroup',
  EvidenceGroupId = 'evidenceGroup__id',
  EvidenceGroupLength = 'evidenceGroup__length',
  Id = 'id',
  LastPeriodChange = 'lastPeriodChange',
  MetaEvidenceId = 'metaEvidenceId',
  NbChoices = 'nbChoices',
  NbRounds = 'nbRounds',
  Ongoing = 'ongoing',
  Penalties = 'penalties',
  Period = 'period',
  Rewards = 'rewards',
  Rounds = 'rounds',
  Ruled = 'ruled',
  Ruling = 'ruling'
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
  DisputeCreatedAtBlock = 'dispute__createdAtBlock',
  DisputeId = 'dispute__id',
  DisputeLastPeriodChange = 'dispute__lastPeriodChange',
  DisputeMetaEvidenceId = 'dispute__metaEvidenceId',
  DisputeNbChoices = 'dispute__nbChoices',
  DisputeNbRounds = 'dispute__nbRounds',
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

export type Juror = {
  __typename?: 'Juror';
  id: Scalars['ID']['output'];
  nbDisputesAttended: Scalars['BigInt']['output'];
  ongoing: Array<Activity>;
  penalties: Array<Penalty>;
  rewards: Array<Reward>;
  stakes: Array<Stake>;
  totalStaked: Scalars['BigInt']['output'];
  totalVotesDrawn: Scalars['BigInt']['output'];
  votes: Array<Vote>;
};


export type JurorOngoingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Activity_Filter>;
};


export type JurorPenaltiesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Penalty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Penalty_Filter>;
};


export type JurorRewardsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Reward_Filter>;
};


export type JurorStakesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Stake_Filter>;
};


export type JurorVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vote_Filter>;
};

export type Juror_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Juror_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nbDisputesAttended?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputesAttended_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputesAttended_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputesAttended_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nbDisputesAttended_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputesAttended_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputesAttended_not?: InputMaybe<Scalars['BigInt']['input']>;
  nbDisputesAttended_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ongoing_?: InputMaybe<Activity_Filter>;
  or?: InputMaybe<Array<InputMaybe<Juror_Filter>>>;
  penalties_?: InputMaybe<Penalty_Filter>;
  rewards_?: InputMaybe<Reward_Filter>;
  stakes_?: InputMaybe<Stake_Filter>;
  totalStaked?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStaked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVotesDrawn?: InputMaybe<Scalars['BigInt']['input']>;
  totalVotesDrawn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVotesDrawn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVotesDrawn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVotesDrawn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVotesDrawn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVotesDrawn_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVotesDrawn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Juror_OrderBy {
  Id = 'id',
  NbDisputesAttended = 'nbDisputesAttended',
  Ongoing = 'ongoing',
  Penalties = 'penalties',
  Rewards = 'rewards',
  Stakes = 'stakes',
  TotalStaked = 'totalStaked',
  TotalVotesDrawn = 'totalVotesDrawn',
  Votes = 'votes'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Penalty = {
  __typename?: 'Penalty';
  dispute: Dispute;
  id: Scalars['Bytes']['output'];
  juror: Juror;
  tokens: Scalars['BigInt']['output'];
};

export type Penalty_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Penalty_Filter>>>;
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
  juror?: InputMaybe<Scalars['String']['input']>;
  juror_?: InputMaybe<Juror_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<Penalty_Filter>>>;
  tokens?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Penalty_OrderBy {
  Dispute = 'dispute',
  DisputeCreatedAtBlock = 'dispute__createdAtBlock',
  DisputeId = 'dispute__id',
  DisputeLastPeriodChange = 'dispute__lastPeriodChange',
  DisputeMetaEvidenceId = 'dispute__metaEvidenceId',
  DisputeNbChoices = 'dispute__nbChoices',
  DisputeNbRounds = 'dispute__nbRounds',
  DisputePeriod = 'dispute__period',
  DisputeRuled = 'dispute__ruled',
  DisputeRuling = 'dispute__ruling',
  Id = 'id',
  Juror = 'juror',
  JurorId = 'juror__id',
  JurorNbDisputesAttended = 'juror__nbDisputesAttended',
  JurorTotalStaked = 'juror__totalStaked',
  JurorTotalVotesDrawn = 'juror__totalVotesDrawn',
  Tokens = 'tokens'
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
  activities: Array<Activity>;
  activity?: Maybe<Activity>;
  arbitrable?: Maybe<Arbitrable>;
  arbitrableHistories: Array<ArbitrableHistory>;
  arbitrableHistory?: Maybe<ArbitrableHistory>;
  arbitrables: Array<Arbitrable>;
  choice?: Maybe<Choice>;
  choices: Array<Choice>;
  dispute?: Maybe<Dispute>;
  disputes: Array<Dispute>;
  evidence?: Maybe<Evidence>;
  evidenceGroup?: Maybe<EvidenceGroup>;
  evidenceGroups: Array<EvidenceGroup>;
  evidences: Array<Evidence>;
  juror?: Maybe<Juror>;
  jurors: Array<Juror>;
  penalties: Array<Penalty>;
  penalty?: Maybe<Penalty>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  round?: Maybe<Round>;
  rounds: Array<Round>;
  stake?: Maybe<Stake>;
  stakes: Array<Stake>;
  subcourt?: Maybe<Subcourt>;
  subcourts: Array<Subcourt>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryActivitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Activity_Filter>;
};


export type QueryActivityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryArbitrableArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
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


export type QueryArbitrablesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrable_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Arbitrable_Filter>;
};


export type QueryChoiceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChoicesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Choice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Choice_Filter>;
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


export type QueryJurorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryJurorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Juror_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Juror_Filter>;
};


export type QueryPenaltiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Penalty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Penalty_Filter>;
};


export type QueryPenaltyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
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


export type QueryStakeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stake_Filter>;
};


export type QuerySubcourtArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySubcourtsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Subcourt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Subcourt_Filter>;
};


export type QueryVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};

export type Reward = {
  __typename?: 'Reward';
  ETH: Scalars['BigInt']['output'];
  dispute: Dispute;
  id: Scalars['Bytes']['output'];
  juror: Juror;
  tokens: Scalars['BigInt']['output'];
};

export type Reward_Filter = {
  ETH?: InputMaybe<Scalars['BigInt']['input']>;
  ETH_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ETH_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ETH_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ETH_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ETH_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ETH_not?: InputMaybe<Scalars['BigInt']['input']>;
  ETH_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Reward_Filter>>>;
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
  juror?: InputMaybe<Scalars['String']['input']>;
  juror_?: InputMaybe<Juror_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<Reward_Filter>>>;
  tokens?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Reward_OrderBy {
  Eth = 'ETH',
  Dispute = 'dispute',
  DisputeCreatedAtBlock = 'dispute__createdAtBlock',
  DisputeId = 'dispute__id',
  DisputeLastPeriodChange = 'dispute__lastPeriodChange',
  DisputeMetaEvidenceId = 'dispute__metaEvidenceId',
  DisputeNbChoices = 'dispute__nbChoices',
  DisputeNbRounds = 'dispute__nbRounds',
  DisputePeriod = 'dispute__period',
  DisputeRuled = 'dispute__ruled',
  DisputeRuling = 'dispute__ruling',
  Id = 'id',
  Juror = 'juror',
  JurorId = 'juror__id',
  JurorNbDisputesAttended = 'juror__nbDisputesAttended',
  JurorTotalStaked = 'juror__totalStaked',
  JurorTotalVotesDrawn = 'juror__totalVotesDrawn',
  Tokens = 'tokens'
}

export type Round = {
  __typename?: 'Round';
  choices: Array<Choice>;
  dispute: Dispute;
  drawnCount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['BigInt']['output'];
  ongoing: Array<Activity>;
  subcourt: Subcourt;
  votes: Array<Vote>;
  votesCastedCount: Scalars['BigInt']['output'];
};


export type RoundChoicesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Choice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Choice_Filter>;
};


export type RoundOngoingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Activity_Filter>;
};


export type RoundVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vote_Filter>;
};

export type Round_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Round_Filter>>>;
  choices_?: InputMaybe<Choice_Filter>;
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
  drawnCount?: InputMaybe<Scalars['BigInt']['input']>;
  drawnCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  drawnCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  drawnCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  drawnCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  drawnCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  drawnCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  drawnCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  index_not?: InputMaybe<Scalars['BigInt']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ongoing_?: InputMaybe<Activity_Filter>;
  or?: InputMaybe<Array<InputMaybe<Round_Filter>>>;
  subcourt?: InputMaybe<Scalars['String']['input']>;
  subcourt_?: InputMaybe<Subcourt_Filter>;
  subcourt_contains?: InputMaybe<Scalars['String']['input']>;
  subcourt_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subcourt_ends_with?: InputMaybe<Scalars['String']['input']>;
  subcourt_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subcourt_gt?: InputMaybe<Scalars['String']['input']>;
  subcourt_gte?: InputMaybe<Scalars['String']['input']>;
  subcourt_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subcourt_lt?: InputMaybe<Scalars['String']['input']>;
  subcourt_lte?: InputMaybe<Scalars['String']['input']>;
  subcourt_not?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_contains?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subcourt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subcourt_starts_with?: InputMaybe<Scalars['String']['input']>;
  subcourt_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votesCastedCount?: InputMaybe<Scalars['BigInt']['input']>;
  votesCastedCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  votesCastedCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  votesCastedCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votesCastedCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  votesCastedCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  votesCastedCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  votesCastedCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Round_OrderBy {
  Choices = 'choices',
  Dispute = 'dispute',
  DisputeCreatedAtBlock = 'dispute__createdAtBlock',
  DisputeId = 'dispute__id',
  DisputeLastPeriodChange = 'dispute__lastPeriodChange',
  DisputeMetaEvidenceId = 'dispute__metaEvidenceId',
  DisputeNbChoices = 'dispute__nbChoices',
  DisputeNbRounds = 'dispute__nbRounds',
  DisputePeriod = 'dispute__period',
  DisputeRuled = 'dispute__ruled',
  DisputeRuling = 'dispute__ruling',
  DrawnCount = 'drawnCount',
  Id = 'id',
  Index = 'index',
  Ongoing = 'ongoing',
  Subcourt = 'subcourt',
  SubcourtId = 'subcourt__id',
  SubcourtStaked = 'subcourt__staked',
  Votes = 'votes',
  VotesCastedCount = 'votesCastedCount'
}

export type Stake = {
  __typename?: 'Stake';
  amount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  juror: Juror;
  subcourt: Subcourt;
};

export type Stake_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Stake_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  juror?: InputMaybe<Scalars['String']['input']>;
  juror_?: InputMaybe<Juror_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<Stake_Filter>>>;
  subcourt?: InputMaybe<Scalars['String']['input']>;
  subcourt_?: InputMaybe<Subcourt_Filter>;
  subcourt_contains?: InputMaybe<Scalars['String']['input']>;
  subcourt_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subcourt_ends_with?: InputMaybe<Scalars['String']['input']>;
  subcourt_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subcourt_gt?: InputMaybe<Scalars['String']['input']>;
  subcourt_gte?: InputMaybe<Scalars['String']['input']>;
  subcourt_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subcourt_lt?: InputMaybe<Scalars['String']['input']>;
  subcourt_lte?: InputMaybe<Scalars['String']['input']>;
  subcourt_not?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_contains?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subcourt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subcourt_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subcourt_starts_with?: InputMaybe<Scalars['String']['input']>;
  subcourt_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Stake_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Juror = 'juror',
  JurorId = 'juror__id',
  JurorNbDisputesAttended = 'juror__nbDisputesAttended',
  JurorTotalStaked = 'juror__totalStaked',
  JurorTotalVotesDrawn = 'juror__totalVotesDrawn',
  Subcourt = 'subcourt',
  SubcourtId = 'subcourt__id',
  SubcourtStaked = 'subcourt__staked'
}

export type Subcourt = {
  __typename?: 'Subcourt';
  id: Scalars['ID']['output'];
  staked: Scalars['BigInt']['output'];
  stakes: Array<Stake>;
};


export type SubcourtStakesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Stake_Filter>;
};

export type Subcourt_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Subcourt_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Subcourt_Filter>>>;
  staked?: InputMaybe<Scalars['BigInt']['input']>;
  staked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  staked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  staked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  staked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  staked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  staked_not?: InputMaybe<Scalars['BigInt']['input']>;
  staked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakes_?: InputMaybe<Stake_Filter>;
};

export enum Subcourt_OrderBy {
  Id = 'id',
  Staked = 'staked',
  Stakes = 'stakes'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  activities: Array<Activity>;
  activity?: Maybe<Activity>;
  arbitrable?: Maybe<Arbitrable>;
  arbitrableHistories: Array<ArbitrableHistory>;
  arbitrableHistory?: Maybe<ArbitrableHistory>;
  arbitrables: Array<Arbitrable>;
  choice?: Maybe<Choice>;
  choices: Array<Choice>;
  dispute?: Maybe<Dispute>;
  disputes: Array<Dispute>;
  evidence?: Maybe<Evidence>;
  evidenceGroup?: Maybe<EvidenceGroup>;
  evidenceGroups: Array<EvidenceGroup>;
  evidences: Array<Evidence>;
  juror?: Maybe<Juror>;
  jurors: Array<Juror>;
  penalties: Array<Penalty>;
  penalty?: Maybe<Penalty>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  round?: Maybe<Round>;
  rounds: Array<Round>;
  stake?: Maybe<Stake>;
  stakes: Array<Stake>;
  subcourt?: Maybe<Subcourt>;
  subcourts: Array<Subcourt>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionActivitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Activity_Filter>;
};


export type SubscriptionActivityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionArbitrableArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
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


export type SubscriptionArbitrablesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrable_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Arbitrable_Filter>;
};


export type SubscriptionChoiceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChoicesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Choice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Choice_Filter>;
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


export type SubscriptionJurorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionJurorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Juror_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Juror_Filter>;
};


export type SubscriptionPenaltiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Penalty_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Penalty_Filter>;
};


export type SubscriptionPenaltyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
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


export type SubscriptionStakeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stake_Filter>;
};


export type SubscriptionSubcourtArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSubcourtsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Subcourt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Subcourt_Filter>;
};


export type SubscriptionVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};

export type Vote = {
  __typename?: 'Vote';
  casted: Scalars['Boolean']['output'];
  choice?: Maybe<Choice>;
  id: Scalars['ID']['output'];
  index: Scalars['BigInt']['output'];
  juror: Juror;
  round: Round;
};

export type Vote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Vote_Filter>>>;
  casted?: InputMaybe<Scalars['Boolean']['input']>;
  casted_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  casted_not?: InputMaybe<Scalars['Boolean']['input']>;
  casted_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  choice?: InputMaybe<Scalars['String']['input']>;
  choice_?: InputMaybe<Choice_Filter>;
  choice_contains?: InputMaybe<Scalars['String']['input']>;
  choice_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  choice_ends_with?: InputMaybe<Scalars['String']['input']>;
  choice_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  choice_gt?: InputMaybe<Scalars['String']['input']>;
  choice_gte?: InputMaybe<Scalars['String']['input']>;
  choice_in?: InputMaybe<Array<Scalars['String']['input']>>;
  choice_lt?: InputMaybe<Scalars['String']['input']>;
  choice_lte?: InputMaybe<Scalars['String']['input']>;
  choice_not?: InputMaybe<Scalars['String']['input']>;
  choice_not_contains?: InputMaybe<Scalars['String']['input']>;
  choice_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  choice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  choice_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  choice_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  choice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  choice_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  choice_starts_with?: InputMaybe<Scalars['String']['input']>;
  choice_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  index_not?: InputMaybe<Scalars['BigInt']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  juror?: InputMaybe<Scalars['String']['input']>;
  juror_?: InputMaybe<Juror_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<Vote_Filter>>>;
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

export enum Vote_OrderBy {
  Casted = 'casted',
  Choice = 'choice',
  ChoiceId = 'choice__id',
  ChoiceIndex = 'choice__index',
  ChoiceVoteCount = 'choice__voteCount',
  Id = 'id',
  Index = 'index',
  Juror = 'juror',
  JurorId = 'juror__id',
  JurorNbDisputesAttended = 'juror__nbDisputesAttended',
  JurorTotalStaked = 'juror__totalStaked',
  JurorTotalVotesDrawn = 'juror__totalVotesDrawn',
  Round = 'round',
  RoundDrawnCount = 'round__drawnCount',
  RoundId = 'round__id',
  RoundIndex = 'round__index',
  RoundVotesCastedCount = 'round__votesCastedCount'
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
}>;


export type DisputeQuery = { __typename?: 'Query', dispute?: { __typename?: 'Dispute', metaEvidenceId: any, ruled: boolean, ruling: any, period: Period, nbChoices: any, lastPeriodChange: any, createdAtBlock: any, arbitrated: { __typename?: 'Arbitrable', id: any }, arbitrableHistory?: { __typename?: 'ArbitrableHistory', metaEvidence: string } | null, evidenceGroup: { __typename?: 'EvidenceGroup', length: any, evidence: Array<{ __typename?: 'Evidence', creationTime: any, URI: string, sender: any }> } } | null };


export const DisputeDocument = gql`
    query Dispute($id: ID!) {
  dispute(id: $id) {
    arbitrated {
      id
    }
    metaEvidenceId
    arbitrableHistory {
      metaEvidence
    }
    ruled
    ruling
    period
    nbChoices
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