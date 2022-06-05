import { gql } from "@apollo/client";

const createSuggestion = gql`
    mutation createSuggestion(
        $category: String
        $title: String
        $detail: String
    ) {
        createSuggestion(
            category: $category
            title: $title
            detail: $detail
            ) {
                id
                title
                category
                detail
            }
        }
`;

export default createSuggestion;