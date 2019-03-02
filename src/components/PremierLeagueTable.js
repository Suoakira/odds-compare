import React from 'react';
import { Header, Image, Table } from 'semantic-ui-react'


const PremierLeagueWinner = (props) => {
    const { name, crestUrl} = props.winner.winner
    return ( 
        <Table basic='very'>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src={crestUrl} rounded size='mini' />
                            <Header.Content>
                                {name}
              <Header.Subheader>{props.winner.endDate.substring(0, 4)}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>);
}
 
export default PremierLeagueWinner;