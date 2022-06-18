import { gql } from "@apollo/client";

const getAllSuggestionsWithUpvotes = gql`
    query getAllSuggestionsWithUpvotes(
        $userId: ID!
    ) {
        getAllSuggestionsWithUpvotes(userId: $userId) {
            id
            title
            category
            detail
            createdBy
            upvotes
            upvotedByUser
        }
    }  
`

export default getAllSuggestionsWithUpvotes;