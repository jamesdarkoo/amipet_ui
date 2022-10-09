import { gql } from '@apollo/client';

export default gql`
  query communes($regionId: ID!) {
    communes(regionId: $regionId) {
      id name
    }
  }`
;
