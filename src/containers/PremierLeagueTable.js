import React, { Component } from 'react';
import config from "../config"
import TableRow from "../components/TableRow"

let unirest = require('unirest')

class PremierLeagueTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            premierLeagueTable: undefined
        }
    }

    componentDidMount() {
        let data = []
        // https://www.football-data.org/
        unirest.get("https://api.football-data.org/v2/competitions/PL/standings")
            .header("X-Auth-Token", config.key)
            .end((result) => {
                data.push(result.body)
                this.setState({ premierLeagueTable: result.body.standings[0].table })
            })
    }

    mapThroughTabkeRows = (standings) => {
        const copyStandings = [...standings]
        return copyStandings.map((teamStandings, key) => <TableRow key={key} teamStandings={teamStandings} /> )
    }

    render() { 
        return ( 

            <div class="ptable">
                <table>
                    <tr class="col">
                        <th>#</th>
                        <th>Team</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>PTS</th>
                    </tr>
                    {this.state.premierLeagueTable &&
                        this.mapThroughTabkeRows(this.state.premierLeagueTable)}
                </table>
            </div>


        )
    }
}
 
export default PremierLeagueTable;