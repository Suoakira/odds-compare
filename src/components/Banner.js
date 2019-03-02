import React, { Component } from 'react'
import { Input, Menu, Header } from 'semantic-ui-react'
import { NavLink } from "react-router-dom"

export default class Banner extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary color="red" >
                <NavLink to="/">
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                </NavLink>

                <NavLink to="/pl-table">
                    <Menu.Item
                        name='League Standings'
                        active={activeItem === 'League Standings'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>

                <NavLink to="/pl-winners">
                    <Menu.Item
                        name='League Winners'
                        active={activeItem === 'League Winners'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Header>Premier League Round Up</Header>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}