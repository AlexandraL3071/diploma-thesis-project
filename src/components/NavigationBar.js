import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Card from "./Card";

export default class MenuExampleTabularOnTop extends Component {
    state = { activeItem: 'Categorii' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu attached='top' tabular>
                    <Menu.Item
                        name='Categorii'
                        active={activeItem === 'Categorii'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Favorite'
                        active={activeItem === 'Favorite'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Cosul meu'
                        active={activeItem === 'Cosul meu'}
                        onClick={this.handleItemClick}
                    />
                </Menu>

                <Segment attached='bottom'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Segment>
            </div>
        )
    }
}
