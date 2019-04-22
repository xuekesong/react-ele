import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Index from './index/index.js'

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Index} />
          <Switch></Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App