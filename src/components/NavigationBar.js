import React, {Component} from 'react'
import {Menu, Segment} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import AllCategories from "./categories/AllCategories";
import Favorites from "./Favorites";
import {Route, Switch} from "react-router";
import Cart from "./cart/Cart";
import FitnessCategory from "./categories/FitnessCategory";
import HikingCategory from "./categories/HikingCategory";
import SwimmingCategory from "./categories/SwimmingCategory";
import AllProducts from "./categories/AllProducts";
import FirebaseContext from "./Firebase/Context";

export default class NavigationBar extends Component {
    state = {activeItem: 'Categorii'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

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
                        <Route exact path="/categorii">
                            <FirebaseContext.Consumer>
                                {firebase => {
                                    return (
                                        <AllCategories firebase={firebase}/>
                                    )
                                }}
                            </FirebaseContext.Consumer>
                        </Route>
                        <Route exact path="/produse">
                            <FirebaseContext.Consumer>
                                {firebase => {
                                    return (
                                        <AllProducts firebase={firebase}
                                        />
                                    )
                                }}
                            </FirebaseContext.Consumer>
                        </Route>
                        <Route path="/favorite"><Favorites/></Route>
                        <Route path="/cos-cumparaturi"><Cart/></Route>
                        <Route path="/categorii/culturism">
                            <FirebaseContext.Consumer>
                                {firebase => {
                                    return (
                                        <FitnessCategory firebase={firebase}
                                        />
                                    )
                                }}
                            </FirebaseContext.Consumer>
                        </Route>
                        <Route path="/categorii/alpinism">
                            <FirebaseContext.Consumer>
                                {firebase => {
                                    return (
                                        <HikingCategory firebase={firebase}
                                        />
                                    )
                                }}
                            </FirebaseContext.Consumer>
                        </Route>
                        <Route path="/categorii/inot">
                            <FirebaseContext.Consumer>
                                {firebase => {
                                    return (
                                        <SwimmingCategory firebase={firebase}
                                        />
                                    )
                                }}
                            </FirebaseContext.Consumer>
                        </Route>
                    </Segment>
                </Switch>
            </div>
        )
    }
}
