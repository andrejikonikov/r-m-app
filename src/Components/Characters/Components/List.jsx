import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import List from '@material-ui/core/List'
import Pagination from '@material-ui/lab/Pagination'

import GET_CHARACTERS from '../../Queries/Characters'
import LoadingView from '../../Shared/LoadingView'
import ErrorMessage from '../../Shared/ErrorMessage'
import Character from './CharacterItem'

function ListView() {
  const [currentPage, setPage] = useState(1)

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage },
  })

  const {
    characters: {
      info,
      results,
    },
  } = data || { characters: { info: {}, results: []} }

  const { next, pages } = info

  if (loading) {
    return ( <LoadingView /> )
  }

  if (error) {
    return ( <ErrorMessage /> )
  }

  return (
    <div className="List">
      <List>
        {results.map(({ id, ...rest }) => <Character key={id} id={id} {...rest} />)}
      </List>
      <Pagination
        count={pages}
        page={next - 1}
        onChange={(event, value) => {
          setPage(value)
        }}
      />
    </div>
  )
}

export default ListView
