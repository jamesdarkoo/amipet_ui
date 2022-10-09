import { gql } from '@apollo/client';

export default gql`
  query regions {
    regions {
      id
      name
    }
  }
`;
