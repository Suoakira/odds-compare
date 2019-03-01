import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./containers/Home"


class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <Switch>
        <Route exact path="/pl-winners" component={Home} />
      </Switch>
      </div>
    );
  }
}

export default App
