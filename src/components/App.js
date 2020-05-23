import SideMenu from './SideMenu';
import AllCategories from './categories/AllCategories';
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import '../theme/variables.css';
import {useFirebaseConnect} from "react-redux-firebase";
import {
    CART_LINK,
    CATEGORIES_LINK, FAVORITE_LINK,
    FITNESS_CATEGORY_LINK, ORDERS_LINK,
    OTHERS_CATEGORY_LINK, PRODUCTS_LINK,
    PRODUCTS_REF,
    TENNIS_CATEGORY_LINK
} from "../utils/linkNames";
import AllProducts from "./categories/AllProducts";
import Favorites from "./favorites/Favorites";
import Cart from "./cart/Cart";
import AllOrders from "./orders/AllOrders";
import {scroll} from '../utils/utils'
import {useSelector} from "react-redux";
import {Redirect} from "react-router";
import CategoryProducts from "./categories/CategoryProducts";

function App () {
    useFirebaseConnect(PRODUCTS_REF);

    const allProducts = useSelector(state => {
        let aux = [];
        if (state.firebase.data.products) {
            aux = aux.concat(state.firebase.data.products.fitness);
            aux = aux.concat(state.firebase.data.products.tennis);
            aux = aux.concat(state.firebase.data.products.others);
        }
        return aux;
    });

    const fitnessProducts = useSelector(state => {
        let aux = [];
        if (state.firebase.data.products) {
           aux = state.firebase.data.products.fitness;
        }
        return aux;
    });

    const tennisProducts = useSelector(state => {
        let aux = [];
        if (state.firebase.data.products) {
            aux = state.firebase.data.products.tennis;
        }
        return aux;
    });

    const othersProducts = useSelector(state => {
        let aux = [];
        if (state.firebase.data.products) {
            aux = state.firebase.data.products.others;
        }
        return aux;
    });

    const favoriteProducts = useSelector(state =>
        state.firebase.data.products ? state.firebase.data.products.favoriteProducts : []
    );

    const cartProducts = useSelector(state =>
        state.firebase.data.products && state.firebase.data.products.cartProducts
            ? state.firebase.data.products.cartProducts : []
    );

    const orders = useSelector(state =>
        state.firebase.data.products ? state.firebase.data.products.orders : []
    );

    const [selectedPage, setSelectedPage] = useState('');

    return (
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId="main">
                    <SideMenu selectedPage={selectedPage} />
                    <IonRouterOutlet id="main">
                        <Route exact path="/"><Redirect to="/Categorii"/></Route>
                        <Route path={CATEGORIES_LINK} render={(props) => {
                            props.products = allProducts;
                            setSelectedPage("Categorii");
                            return <AllCategories {...props}/>;
                        }} exact={true} onClick={scroll}/>
                        <Route path={FITNESS_CATEGORY_LINK} render={(props) => {
                            props.products = fitnessProducts;
                            props.category = "fitness";
                            setSelectedPage("Categorii");
                            return <CategoryProducts {...props}/>;
                        }} exact={true} onClick={scroll}/>
                        <Route path={TENNIS_CATEGORY_LINK} render={(props) => {
                            props.products = tennisProducts;
                            props.category = "tenis";
                            setSelectedPage("Categorii");
                            return <CategoryProducts {...props}/>;
                        }} exact={true} onClick={scroll}/>
                        <Route path={OTHERS_CATEGORY_LINK} render={(props) => {
                            props.products = othersProducts;
                            props.category = "diverse";
                            setSelectedPage("Categorii");
                            return <CategoryProducts {...props}/>;
                        }} exact={true} onClick={scroll}/>
                        <Route path={PRODUCTS_LINK} render={(props) => {
                            props.products = allProducts;
                            setSelectedPage("Produse");
                            return <AllProducts {...props} onClick={scroll}/>;
                        }} exact={true}/>
                        <Route path={FAVORITE_LINK} render={(props) => {
                            props.products = favoriteProducts;
                            setSelectedPage("Produse favorite");
                            return <Favorites {...props}/>;
                        }} exact={true}/>
                        <Route path={CART_LINK} render={(props) => {
                            props.products = cartProducts;
                            setSelectedPage("Cosul de cumparaturi");
                            return <Cart {...props}/>;
                        }} exact={true}/>
                        <Route path={ORDERS_LINK} render={(props) => {
                            props.orders = orders;
                            setSelectedPage("Comenzi");
                            return <AllOrders {...props}/>;
                        }} exact={true}/>
                    </IonRouterOutlet>
                </IonSplitPane>
            </IonReactRouter>
        </IonApp>
    );
}

export default App;

