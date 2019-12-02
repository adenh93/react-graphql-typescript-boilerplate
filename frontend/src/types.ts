export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type CreateUserInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  name: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createUser?: Maybe<User>,
  updateUser?: Maybe<User>,
  deleteUser?: Maybe<User>,
};


export type MutationCreateUserArgs = {
  data?: Maybe<CreateUserInput>
};


export type MutationUpdateUserArgs = {
  id?: Maybe<Scalars['ID']>,
  data?: Maybe<UpdateUserInput>
};


export type MutationDeleteUserArgs = {
  id?: Maybe<Scalars['ID']>
};

export type Query = {
   __typename?: 'Query',
  user?: Maybe<User>,
  users: Array<User>,
};


export type QueryUserArgs = {
  id: Scalars['ID']
};

export type UpdateUserInput = {
  username?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  username: Scalars['String'],
  email: Scalars['String'],
  name: Scalars['String'],
};
