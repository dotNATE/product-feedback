import { gql } from '@apollo/client';

const createUser = gql`
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
`;

export default createUser;