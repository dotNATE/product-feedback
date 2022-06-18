import { gql } from "@apollo/client";

const removeUpvote = gql`
    mutation removeUpvote(
        $userId: ID, 
        $suggestionId: ID
    ) {
        removeUpvote(
            userId: $userId, 
            suggestionId: $suggestionId
        ) {
            success
            message
        }
    }
`;

export default removeUpvote;