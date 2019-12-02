import React, { SFC } from "react";

interface Props {
  name: string;
  username: string;
  email: string;
}

const User: SFC<Props> = ({ name, username, email }) => (
  <div>
    <h3>{name}</h3>
    <p>{username}</p>
    <p>{email}</p>
  </div>
);

export default User;
