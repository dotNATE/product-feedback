import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation createUser(
        $firstName: String!
        $lastName: String!
        $username: String!
        $password: String!
        ) {
        createUser(
            firstName: $firstName
            lastName: $lastName
            username: $username
            password: $password
            ) {
            id
            firstName
            lastName
            username
        }
    }
`