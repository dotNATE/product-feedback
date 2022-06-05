import { gql } from "@apollo/client";

const createSuggestion = gql`
    mutation createSuggestion(
        $category: String
        $title: String
        $detail: String
        $createdBy: ID
    ) {
        createSuggestion(
            category: $category
            title: $title
            detail: $detail
            createdBy: $createdBy
            ) {
                id
                title
                category
                detail
                createdBy
            }
        }
`;

export default createSuggestion;