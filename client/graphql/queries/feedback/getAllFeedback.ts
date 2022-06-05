import { gql } from "@apollo/client";

const getAllFeedback = gql`
    query getAllFeedback {
        getAllFeedback {
        id
        title
        category
        detail
        }
    }  
`

export default getAllFeedback;