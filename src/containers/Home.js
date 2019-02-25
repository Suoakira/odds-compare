import React, { Component } from "react"
import FootBallCard from "../components/FootBallCard"
let unirest = require('unirest')

const config = require("../config")


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            premierLeagueMatches: undefined
        }
    }

    getData = (url) => {
        this.getData(url)
            .then((resp) => resp.json())
            .catch((error) => console.log(error))
    }

    componentDidMount() {
        let data = []
        unirest.get("https://api.football-data.org/v2/competitions/PL/matches?")
            .header("X-Auth-Token", config.key)
            .end((result) => {
                data.push(result.body.matches)
                console.log(data)
                this.setState({ premierLeagueMatches: data})
            })
    }

    

    mapThroughMatches = () => {
        const matches = this.state.premierLeagueMatches.map(match => match)
        console.log("matches", matches)
        return matches[0].map(match => 
            <FootBallCard 
            matchDay={match.season.currentMatchday}
            matchDate={match.utcDate}
            awayName={match.awayTeam.name}
            homeName={match.homeTeam.name}
            homeScore={match.score.fullTime.homeTeam}
            awayScore={match.score.fullTime.awayTeam}
            />
        )
    }


    


    render() {

        return ( 
        <div>{
            this.state.premierLeagueMatches &&
            this.mapThroughMatches()
        }
        </div> );
    }
}

export default Home;