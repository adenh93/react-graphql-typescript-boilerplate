import { Context } from "../../utils";
import {
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  MutationDeleteUserArgs
} from "../../generated/types";

const userMutation = {
  createUser(parent, { data }: MutationCreateUserArgs, { prisma }: Context) {
    return prisma.createUser(data);
  },
  updateUser(
    parent,
    { id, data }: MutationUpdateUserArgs,
    { prisma }: Context
  ) {
    return prisma.updateUser({ where: { id }, data });
  },
  deleteUser(parent, { id }: MutationDeleteUserArgs, { prisma }: Context) {
    return prisma.deleteUser({ id });
  }
};

export default userMutation;
