import React from 'react'
import { useQuery } from '@apollo/client'
import Box from '@material-ui/core/Box'

import GET_CHARACTER from '../Queries/Character'

import Page from '../Shared/Page'
import LoadingView from '../Shared/LoadingView'
import ErrorMessage from '../Shared/ErrorMessage'

import CharacterCard from './Components/CharacterCard'

function Characters({ match }) {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: match.params.id },
  })

  if (loading) {
    return ( <LoadingView /> )
  }

  if (error) {
    return ( <ErrorMessage /> )
  }

  const { character } = data || { character: {} }

  return (
    <Page>
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
        <CharacterCard {...character} />
      </Box>
    </Page>
  )
}

export default Characters
