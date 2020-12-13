import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import GET_CHARACTERS from '../Queries/Characters'

import List from '@material-ui/core/List'
import CircularProgress from '@material-ui/core/CircularProgress'
import Pagination from '@material-ui/lab/Pagination'
import Box from '@material-ui/core/Box'

import Character from './Character'

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
    return (
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
      )
  }

  if (error) {
    return (
      <p severity="error">Something went wrong, try later.</p>
    )
  }

  return (
    <div className="List">
      <List>
        {results.map((character) => <Character {...character} />)}
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
