import { Context } from "../../utils";
import { QueryUserArgs } from "../../generated/types";

const userQuery = {
  users(parent, args, context: Context) {
    return context.prisma.users();
  },
  user(parent, { id }: QueryUserArgs, context: Context) {
    return context.prisma.user({ id });
  }
};

export default userQuery;
