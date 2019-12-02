import { gql } from "apollo-boost";
import { userFields } from "../fragments/user";

export const createUser = gql`
  mutation($data: CreateUserInput) {
    createUser(data: $data) {
      ...userFields
    }
  }
  ${userFields}
`;

export const updateUser = gql`
  mutation($id: ID!, $data: UpdateUserInput) {
    updateUser(id: $id, data: $data) {
      ...userFields
    }
  }
  ${userFields}
`;

export const deleteUser = gql`
  mutation($id: ID!) {
    deleteUser(id: $id) {
      ...userFields
    }
  }
  ${userFields}
`;
