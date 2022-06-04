import { GraphQLID, GraphQLString } from "graphql";
import { Feedback } from "../../../Models";
import { FeedbackType } from "../../TypeDefs";

const createFeedback = {
    type: FeedbackType,
    args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        detail: { type: GraphQLString },
    },
    async resolve(_: any, args: any) {
        const { title, category, detail } = args;

        const newFeedback = await Feedback.create({ title, category, detail });

        return newFeedback;
    },
};

export default createFeedback;