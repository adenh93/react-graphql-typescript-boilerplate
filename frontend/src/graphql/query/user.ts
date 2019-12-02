import { gql } from "apollo-boost";
import { userFields } from "../fragments/user";

export const getUsers = gql`
  query {
    users {
      ...userFields
    }
  }
  ${userFields}
`;

export const getUser = gql`
  query($id: ID!) {
    user(id: $id) {
      ...userFields
    }
  }
  ${userFields}
`;
