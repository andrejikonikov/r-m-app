import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Characters from './Components/Characters/Characters'
import Character from './Components/Character/Character'
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/characters/:id"
            render={(props) => <Character {...props} />}
          />
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
