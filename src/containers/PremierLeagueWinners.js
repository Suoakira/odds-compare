import React, { Component } from "react"
import Banner from "../components/Banner"
import LeagueTable from "../components/PremierLeagueTable"

class PremierLeagueWinners extends Component {

        constructor(props) {
        super(props)
        this.state = {  }
        }



    mapThroughWinners = (array) => {
        const premierLeagueWinners = array.filter(winner => winner.winner !== null)
        console.log(premierLeagueWinners)
        return premierLeagueWinners.map((winner, key) => <LeagueTable key={key} winner={winner} />)
    }

    render() {
        const { plWinners } = this.props
        return ( 
            <React.Fragment>
                {this.props.plWinners &&
                    this.mapThroughWinners(plWinners)}

            </React.Fragment>
        )
    }
}

export default PremierLeagueWinners
