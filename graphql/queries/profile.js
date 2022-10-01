import { gql } from '@apollo/client';

export default gql`
  query profile {
    myProfile {
      id
      birthdate
      biography
      gender
      address
      phone
      cellPhone
      career
      school
      regionId: region {id}
      communeId: commune {id}
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
