import React, { SFC } from "react";
import UserList from "./UserList";
import { useQuery } from "react-apollo";
import { getUsers } from "../../graphql/query/user";
import { Query } from "../../types";

const UserListContainer: SFC = () => {
  const { loading, error, data } = useQuery<Query>(getUsers);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users...</p>;

  return <UserList users={data!.users} />;
};

export default UserListContainer;
