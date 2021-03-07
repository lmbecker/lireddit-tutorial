export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
}

export interface Query {
  readonly __typename?: 'Query';
  readonly hello: Scalars['String'];
  readonly location?: Maybe<Location>;
  readonly login: UserResponse;
  readonly me?: Maybe<User>;
  readonly post?: Maybe<Post>;
  readonly posts: ReadonlyArray<Post>;
}


export interface QueryloginArgs {
  options: UsernamePasswordInput;
}


export interface QuerypostArgs {
  id: Scalars['Int'];
}

export interface Post {
  readonly __typename?: 'Post';
  readonly id: Scalars['Int'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Scalars['DateTime'];
  readonly title: Scalars['String'];
}


export interface User {
  readonly __typename?: 'User';
  readonly id: Scalars['Int'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Scalars['DateTime'];
  readonly username: Scalars['String'];
}

export interface UserResponse {
  readonly __typename?: 'UserResponse';
  readonly errors?: Maybe<ReadonlyArray<FieldError>>;
  readonly user?: Maybe<User>;
}

export interface FieldError {
  readonly __typename?: 'FieldError';
  readonly field: Scalars['String'];
  readonly message: Scalars['String'];
}

export interface UsernamePasswordInput {
  readonly username: Scalars['String'];
  readonly password: Scalars['String'];
}

export interface Mutation {
  readonly __typename?: 'Mutation';
  readonly createPost: Post;
  readonly updatePost?: Maybe<Post>;
  readonly deletePost: Scalars['Boolean'];
  readonly register: UserResponse;
}


export interface MutationcreatePostArgs {
  title: Scalars['String'];
}


export interface MutationupdatePostArgs {
  title?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
}


export interface MutationdeletePostArgs {
  id: Scalars['Float'];
}


export interface MutationregisterArgs {
  options: UsernamePasswordInput;
}

export interface Location {
  readonly __typename?: 'Location';
  readonly pathname?: Maybe<Scalars['String']>;
  readonly search?: Maybe<Scalars['String']>;
  readonly origin?: Maybe<Scalars['String']>;
  readonly hash?: Maybe<Scalars['String']>;
  readonly host?: Maybe<Scalars['String']>;
  readonly hostname?: Maybe<Scalars['String']>;
  readonly href?: Maybe<Scalars['String']>;
  readonly port?: Maybe<Scalars['Int']>;
  readonly protocol?: Maybe<Scalars['String']>;
}

export type AppQueryVariables = Exact<{ [key: string]: never; }>;


export type AppQueryData = (
  { readonly __typename?: 'Query' }
  & { readonly location?: Maybe<(
    { readonly __typename?: 'Location' }
    & Pick<Location, 'pathname'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryData = (
  { readonly __typename?: 'Query' }
  & { readonly me?: Maybe<(
    { readonly __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type PostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PostQueryData = (
  { readonly __typename?: 'Query' }
  & { readonly post?: Maybe<(
    { readonly __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'createdAt' | 'updatedAt'>
  )> }
);
