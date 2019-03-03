import React, { Component } from 'react'

import moment from "moment"

import config from "../config"

let unirest = require('unirest')

class UpcomingMatches extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            upcomingMatches: undefined
         }
    }

    componentDidMount() {
        let data = []
        // https://www.football-data.org/
        unirest.get(`https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED`)
            .header("X-Auth-Token", config.key)
            .end((result) => {
                data.push(result.body)
                console.log(result.body.matches)
                this.setState({ upcomingMatches: result.body.matches })
            })
    }


    render() { 
        return ( 
            <div>
                {moment().format('L').toString()}
                Hello UpcomingMatches
            </div>
         )
    }
}
 
export default UpcomingMatches;