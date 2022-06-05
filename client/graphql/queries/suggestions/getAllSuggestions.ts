import { gql } from "@apollo/client";

const getAllSuggestions = gql`
    query getAllSuggestions {
        getAllSuggestions {
        id
        title
        category
        detail
        }
    }  
`

export default getAllSuggestions;