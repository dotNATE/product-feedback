import { gql } from "@apollo/client";

const addUpvote = gql`
    mutation addUpvote(
        $userId: ID, 
        $suggestionId: ID
    ) {
        addUpvote(
            userId: $userId, 
            suggestionId: $suggestionId
        ) {
            success
            message
        }
    }
`;

export default addUpvote;