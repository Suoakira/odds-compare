import React, { Component } from "react"
import Banner from "../components/Banner"
import LeagueTable from "../components/PremierLeagueTable"

import { Grid } from "semantic-ui-react"

let unirest = require('unirest')



const config = require("../config")


class Home extends Component {
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
        unirest.get("https://api.football-data.org/v2/competitions/PL/")
            .header("X-Auth-Token", config.key)
            .end((result) => {
                data.push(result.body)
                //extract some more data here about previous winners see API documentations lots of info
                this.setState({ premierLeagueWinners: data[0].seasons })
            })
    }

    mapThroughWinners = (array) => {
        const premierLeagueWinners = array.filter(winner => winner.winner !== null)
        console.log(premierLeagueWinners)
        return premierLeagueWinners.map(winner => <LeagueTable winner={winner} />)

    }




    render() {

        return ( 
            <React.Fragment>
                <Banner />
                <h1>Premier League Winners</h1>
                {
                    this.state.premierLeagueWinners &&
                    this.mapThroughWinners([...this.state.premierLeagueWinners])
                    }
            </React.Fragment>
            )
    }
}

export default Home;