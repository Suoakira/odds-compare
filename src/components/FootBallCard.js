import React from 'react';
import { Segment, Header, Grid, GridColumn } from "semantic-ui-react"

import Score from "../components/Score"

const moment = require("moment")



const FootballCard = (props) => {

    const dateObject = new Date(props.matchDate)
    return ( 

        
        <Segment>
            <Header>{moment(dateObject).format("ll")}</Header>
            <h5>Kick Off: {moment(dateObject).format("LT")}</h5> 
            <Segment>
                <div className="pad-left">
                <Grid colums={2}>
                <Grid.Row>
                        <Score home={props.homeScore} away={props.awayScore} />
                        <div className="team-names"> {props.homeName}<br></br><div className="team-name-pad" />{props.awayName}</div> 
                </Grid.Row>

                </Grid>
                </div>
            </Segment>

                
        </Segment>

     )
}
 
export default FootballCard;