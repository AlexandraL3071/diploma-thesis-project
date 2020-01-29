import React, {Component} from 'react'
import {Menu, Segment} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import AllCategories from "./categories/AllCategories";
import Favorites from "./Favorites";
import {Route, Switch} from "react-router";
import Cart from "./cart/Cart";
import Bodybuilding_Category from "./categories/Bodybuilding_Category";
import Athletics_Category from "./categories/Athletics_Category";
import Swimming_Category from "./categories/Swimming_Category";
import AllProducts from "./AllProducts";

export default class NavigationBar extends Component {
    state = {activeItem: 'Categorii'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <div>
                <Menu attached='top' tabular inverted>
                    <Link to="/categorii"><Menu.Item
                        name='Categorii'
                        active={activeItem === 'Categorii'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to="/produse"><Menu.Item
                        name='Toate produsele'
                        active={activeItem === 'Toate produsele'}
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
                    <Segment attached='bottom' inverted>
                        <Route exact path="/categorii"><AllCategories/></Route>
                        <Route exact path="/produse"><AllProducts/></Route>
                        <Route path="/favorite"><Favorites/></Route>
                        <Route path="/cos-cumparaturi"><Cart/></Route>
                        <Route path="/categorii/culturism"><Bodybuilding_Category/></Route>
                        <Route path="/categorii/atletism"><Athletics_Category/></Route>
                        <Route path="/categorii/inot"><Swimming_Category/></Route>
                    </Segment>
                </Switch>
            </div>
        )
    }
}
