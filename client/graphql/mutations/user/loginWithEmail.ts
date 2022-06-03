import { gql } from '@apollo/client';

const loginWithEmail = gql`
    mutation loginWithEmail(
        $email: String!
        $password: String!
        ) {
            loginWithEmail(
            email: $email
            password: $password
            ) {
            token
        }
    }
`;

export default loginWithEmail;