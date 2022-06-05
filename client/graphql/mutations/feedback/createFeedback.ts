import { gql } from "@apollo/client";

const createFeedback = gql`
    mutation createFeedback(
        $category: String
        $title: String
        $detail: String
    ) {
        createFeedback(
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

export default createFeedback;