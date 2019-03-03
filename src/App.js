import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Banner from "./components/Banner"
import config from "./config"

import PremierLeagueWinners from "./containers/PremierLeagueWinners"
import PremierLeagueTable from "./containers/PremierLeagueTable"
import UpcomingMatches from "./containers/UpcomingMatchs"

let unirest = require('unirest')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      premierLeagueWinners: undefined
    }
  }

  getData = (url) => {
    this.getData(url)
      .then((resp) => resp.json())
      .catch((error) => console.log(error))
  }

  componentDidMount() {
    let data = []
    // 
    unirest.get("https://api.football-data.org/v2/competitions/PL/")
      .header("X-Auth-Token", config.key)
      .end((result) => {
        data.push(result.body)
        //extract some more data here about previous winners see API documentations lots of info
        this.setState({ premierLeagueWinners: data[0].seasons })
      })
  }

  render() {
    const { premierLeagueWinners } = this.state 
    return (
      <div className="wrapper">
        <Banner />
        <Switch>
            <Route 
            exact path="/pl-winners" 
            render={props => <PremierLeagueWinners plWinners={premierLeagueWinners}/>}
            />
            <Route
              exact path="/pl-table"
              render={props => <PremierLeagueTable />}
            />
            <Route
              exact path="/pl-matches"
              render={props => <UpcomingMatches />}
            />
        </Switch>
      </div>
    );
  }
}

export default App
