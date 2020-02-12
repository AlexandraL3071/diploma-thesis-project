import React, {Component} from 'react'
import {Menu, Segment} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import AllCategories from "./categories/AllCategories";
import Favorites from "./Favorites";
import {Route, Switch} from "react-router";
import Cart from "./cart/Cart";
import FitnessCategory from "./categories/FitnessCategory";
import TennisCategory from "./categories/TennisCategory";
import OthersCategory from "./categories/OthersCategory";
import AllProducts from "./categories/AllProducts";
import FirebaseContext from "./Firebase/Context";

export default class NavigationBar extends Component {
    // TODO: there should also be the search bar on the right of the
    // menu bar and a button of search which links to /produse and passes
    // products to be displayed via props (an approach viable until
    // it proves useless)

    // TODO: a menu item which links to AllOrders -
    // a component which displays all of the orders placed (from products/orders or orders) and offers the ability to delete them
    // only if they have been placed with less than a number of hours/days before
    // the current date
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

                <div className="ui divider"/>

                <Segment id="segment" attached='bottom' inverted>
                    <Switch>
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
                        <Route path="/categorii/fitness">
                            <FirebaseContext.Consumer>
                                {firebase => {
                                    return (
                                        <FitnessCategory firebase={firebase}
                                        />
                                    )
                                }}
                            </FirebaseContext.Consumer>
                        </Route>
                        <Route path="/categorii/tenis">
                            <FirebaseContext.Consumer>
                                {firebase => {
                                    return (
                                        <TennisCategory firebase={firebase}
                                        />
                                    )
                                }}
                            </FirebaseContext.Consumer>
                        </Route>
                        <Route path="/categorii/altele">
                            <FirebaseContext.Consumer>
                                {firebase => {
                                    return (
                                        <OthersCategory firebase={firebase}
                                        />
                                    )
                                }}
                            </FirebaseContext.Consumer>
                        </Route>
                    </Switch>
                </Segment>
            </div>
        )
    }
}
