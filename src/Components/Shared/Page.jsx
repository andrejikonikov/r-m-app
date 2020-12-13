import React from 'react'
import Container from '@material-ui/core/Container'

function Page({ children }) {
  return (
    <Container fixed>
      {children}
    </Container>
  )
}

export default Page
