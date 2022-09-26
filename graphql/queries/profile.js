import { gql } from '@apollo/client';

export default gql`
  query profile {
    me {
      id
      firstName
      lastName
      email
      isActive
      createdAt
      updatedAt
    }
  }
`;
