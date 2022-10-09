import { gql } from '@apollo/client';

export default gql`
  query profile {
    myProfile {
      id
      avatarUrl
      birthdate
      biography
      gender
      address
      phone
      cellPhone
      career
      school
      region { id name }
      commune { id name }
      rut
      avatarUrl
      periodEnd
      periodStart
      email
      firstName
      lastName
    }
  }
`;
