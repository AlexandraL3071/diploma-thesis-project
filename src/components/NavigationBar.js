import React, {Component} from 'react'
import {Menu, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import AllCategories from './categories/AllCategories';
import Favorites from './favorites/Favorites';
import {Route, Switch} from 'react-router';
import Cart from './cart/Cart';
import FitnessCategory from './categories/FitnessCategory';
import TennisCategory from './categories/TennisCategory';
import OthersCategory from './categories/OthersCategory';
import AllProducts from './categories/AllProducts';
import ConfirmationModal from './ConfirmationModal';
import AllOrders from './orders/AllOrders';
import {
    ADD_CART_LINK,
    ADD_FAVORITE_LINK,
    CART_LINK,
    CATEGORIES_LINK, FAVORITE_LINK,
    FITNESS_CATEGORY_LINK, ORDERS_LINK,
    OTHERS_CATEGORY_LINK, PLACE_ORDER_LINK,
    PRODUCTS_LINK,
    TENNIS_CATEGORY_LINK
} from "../utils/linkNames";

export default class NavigationBar extends Component {
    // TODO: put the active element on firebase and manage it via react redux firebase
    // and change it whenever the route is changed

    state = {activeItem: 'Categorii'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Menu attached='top' tabular inverted>
                    <Link to={CATEGORIES_LINK}><Menu.Item
                        name='Categorii'
                        active={activeItem === 'Categorii'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to={PRODUCTS_LINK}><Menu.Item
                        name='Toate produsele'
                        active={activeItem === 'Toate produsele'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to={FAVORITE_LINK}><Menu.Item
                        name='Favorite'
                        active={activeItem === 'Favorite'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to={CART_LINK}><Menu.Item
                        name='Cosul meu'
                        active={activeItem === 'Cosul meu'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to={ORDERS_LINK}><Menu.Item
                        name='Comenzi plasate'
                        active={activeItem === 'Comenzi plasate'}
                        onClick={this.handleItemClick}
                    /></Link>
                </Menu>

                <div className='ui divider'/>

                <Segment id='segment' attached='bottom' inverted>
                    <Switch>
                        <Route exact path={CATEGORIES_LINK}><AllCategories/></Route>
                        <Route exact path={PRODUCTS_LINK}><AllProducts/></Route>
                        <Route exact path={FAVORITE_LINK}><Favorites/></Route>
                        <Route exact path={CART_LINK}><Cart/></Route>
                        <Route exact path={ORDERS_LINK}><AllOrders/></Route>
                        <Route exact path={FITNESS_CATEGORY_LINK}><FitnessCategory/></Route>
                        <Route exact path={TENNIS_CATEGORY_LINK}><TennisCategory/></Route>
                        <Route exact path={OTHERS_CATEGORY_LINK}><OthersCategory/></Route>
                        <Route exact path={ADD_CART_LINK}><ConfirmationModal okLink={CATEGORIES_LINK} goLink={CART_LINK}
                                                                             okText='OK'
                                                                             buttonText='Vizualizati cosul de cumparaturi'
                                                                             content='Produsul a fost adaugat in cos!'
                                                                             title='Produs adaugat'/>
                        </Route>
                        <Route exact path={ADD_FAVORITE_LINK}><ConfirmationModal okLink={CATEGORIES_LINK} goLink={FAVORITE_LINK}
                                                                                 okText='OK'
                                                                                 buttonText='Vizualizati produsele favorite'
                                                                                 content='Ati marcat produsul ca fiind favorit!'
                                                                                 title='Produs favorit'/>
                        </Route>
                        <Route exact path={PLACE_ORDER_LINK}><ConfirmationModal okLink={PRODUCTS_LINK} goLink={CART_LINK}
                                                                                okText='Vezi si alte produse'
                                                                                buttonText='Inapoi la cosul de cumparaturi'
                                                                                content='Comanda a fost plasata!'
                                                                                title='Comanda plasata'/>
                        </Route>

                    </Switch>
                </Segment>
            </div>
        )
    }
}
