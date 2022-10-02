import { gql } from '@apollo/client';

export default gql`
  mutation updateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      success
      message
      profile {
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
  }
`;
