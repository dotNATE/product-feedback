import { GraphQLID } from "graphql";
import { User } from "../../../Models";
import { MessageType } from "../../TypeDefs";

const deleteUser = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, args: any) {
        const { id } = args;
        
        await User.destroy({
            where: {
                id
            },
        });

        return { success: true, message: "User deleted successfully" };
    },
};

export default deleteUser;