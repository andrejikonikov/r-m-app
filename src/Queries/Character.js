import { gql } from '@apollo/client';

const GET_CHARACTER = gql`
  query Character($id:ID!) {
    character(id:$id) {
      name
      image
      status,
      species,
      gender,
    }
  }
`;

export default GET_CHARACTER
