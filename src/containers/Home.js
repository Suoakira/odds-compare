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
            premierLeagueMatches: undefined
        }
    }

    getData = (url) => {
        this.getData(url)
            .then((resp) => resp.json())
            .catch((error) => console.log(error))
    }

    componentDidMount() {

    }




    render() {

        return ( 
            <React.Fragment>
                <Banner />
                <LeagueTable />

            </React.Fragment>
            )
    }
}

export default Home;