import React from 'react';
import { Segment, Header } from "semantic-ui-react"
const moment = require("moment")

const FootballCard = (props) => {

    const dateObject = new Date(props.matchDate)
    return ( 
        <Segment>
            <Header>{moment(dateObject).format("ll")}</Header>
            <h5>Kick Off: {moment(dateObject).format("LT")}</h5> 
            <Segment>
                {props.homeName} {props.homeScore} : {props.awayScore} {props.awayName}
            </Segment>
        </Segment>

     )
}
 
export default FootballCard;