import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom"

export default class Banner extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <NavLink to="/">
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                </NavLink>
                
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <NavLink to="/pl-winners">
                    <Menu.Item
                        name='League Winners'
                        active={activeItem === 'League Winners'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}