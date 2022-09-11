import { gql } from '@apollo/client';

export default gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      success
      message
      accessToken
      refreshToken
      me {
        id
        email
      }
    }
  }
`;
