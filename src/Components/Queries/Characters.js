import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
        gender
      }
    }
  }
`

export default GET_CHARACTERS
