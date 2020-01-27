import React, {Component} from 'react'
import {Input, Menu, Segment} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import AllCategories from "./AllCategories";
import Favorites from "./Favorites";
import {Route, Switch} from "react-router";
import Cart from "./Cart";

export default class NavigationBar extends Component {
    state = {activeItem: 'Categorii'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <div>
                <Menu attached='top' tabular>
                    <Link to="/categorii"><Menu.Item
                        name='Categorii'
                        active={activeItem === 'Categorii'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to="/favorite"><Menu.Item
                        name='Favorite'
                        active={activeItem === 'Favorite'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to="/cos-cumparaturi"><Menu.Item
                        name='Cosul meu'
                        active={activeItem === 'Cosul meu'}
                        onClick={this.handleItemClick}
                    /></Link>
                </Menu>

                <Switch>
                    <Segment attached='bottom'>
                        <Route path="/categorii"><AllCategories/></Route>
                        <Route path="/favorite"><Favorites/></Route>
                        <Route path="/cos-cumparaturi"><Cart/></Route>
                    </Segment>
                </Switch>
            </div>
        )
    }
}
