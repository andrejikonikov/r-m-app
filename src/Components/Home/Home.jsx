import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'

import Page from '../Shared/Page'

function Home() {
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
        <Link to="/characters">
          <Button variant="contained">Click to see characters</Button>
        </Link>
      </Box>
    </Page>
  )
}

export default Home
