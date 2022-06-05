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
        console.log('createFeedback invoked with: ', args);
        const { title, category, detail } = args;

        if (title.length === 0 || category.length === 0 || detail.length === 0) {
            throw new Error("You must fill in all fields");
        }

        const newFeedback = await Feedback.create({ title, category, detail });

        return newFeedback;
    },
};

export default createFeedback;