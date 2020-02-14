import React, {Component} from 'react'
import {Menu, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import AllCategories from './categories/AllCategories';
import Favorites from './Favorites';
import {Route, Switch} from 'react-router';
import Cart from './cart/Cart';
import FitnessCategory from './categories/FitnessCategory';
import TennisCategory from './categories/TennisCategory';
import OthersCategory from './categories/OthersCategory';
import AllProducts from './categories/AllProducts';
import AddToCart from './AddToCart';
import AddToFavorites from './AddToFavorites';
import PlaceOrder from './PlaceOrder';
import AllOrders from './orders/AllOrders';

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
                    <Link to='/categorii'><Menu.Item
                        name='Categorii'
                        active={activeItem === 'Categorii'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to='/produse'><Menu.Item
                        name='Toate produsele'
                        active={activeItem === 'Toate produsele'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to='/favorite'><Menu.Item
                        name='Favorite'
                        active={activeItem === 'Favorite'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to='/cos-cumparaturi'><Menu.Item
                        name='Cosul meu'
                        active={activeItem === 'Cosul meu'}
                        onClick={this.handleItemClick}
                    /></Link>
                    <Link to='/comenzi'><Menu.Item
                        name='Comenzi plasate'
                        active={activeItem === 'Comenzi plasate'}
                        onClick={this.handleItemClick}
                    /></Link>
                </Menu>

                <div className='ui divider'/>

                <Segment id='segment' attached='bottom' inverted>
                    <Switch>
                        <Route exact path='/categorii'><AllCategories/></Route>
                        <Route exact path='/produse'><AllProducts/></Route>
                        <Route exact path='/favorite'><Favorites/></Route>
                        <Route exact path='/cos-cumparaturi'><Cart/></Route>
                        <Route exact path='/comenzi'><AllOrders/></Route>
                        <Route exact path='/categorii/fitness'><FitnessCategory/></Route>
                        <Route exact path='/categorii/tenis'><TennisCategory/></Route>
                        <Route exact path='/categorii/altele'><OthersCategory/></Route>
                        <Route exact path='/categorii/adaugare-cos' component={AddToCart}/>
                        <Route exact path='/categorii/adaugare-favorite' component={AddToFavorites}/>
                        <Route exact path='/cos-cumparaturi/plaseaza-comanda' component={PlaceOrder}/>

                    </Switch>
                </Segment>
            </div>
        )
    }
}
