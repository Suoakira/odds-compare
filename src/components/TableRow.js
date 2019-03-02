import React from 'react'

const TableRow = (props) => {

    console.log(props)

    const { position, playedGames, team, won, draw, lost, goalDifference, points } = props.teamStandings
    return ( 
        <tr class="wpos">
            <td>{position}</td>
            <td><img className="crest" src={team.crestUrl} alt={team.name} />{team.name}</td>
            <td>{playedGames}</td>
            <td>{won}</td>
            <td>{draw}</td>
            <td>{lost}</td>
            <td>{goalDifference}</td>
            <td>{points}</td>
        </tr>
     )
}
 
export default TableRow;