import { GraphQLList } from "graphql"
import { Feedback } from "../../../Models";
import { FeedbackType } from "../../TypeDefs"

const getAllFeedback = {
    type: new GraphQLList(FeedbackType),
    resolve() {
        console.log('getAllFeedback invoked');
        const feedback = Feedback.findAll();

        return feedback;
    },
};

export default getAllFeedback;