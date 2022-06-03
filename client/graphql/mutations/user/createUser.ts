import { gql } from '@apollo/client';

const createUser = gql`
    mutation createUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $username: String!
        $password: String!
        ) {
        createUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            username: $username
            password: $password
            ) {
            id
            firstName
            lastName
            email
            username
        }
    }
`;

export default createUser;