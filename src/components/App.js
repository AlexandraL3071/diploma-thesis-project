import SideMenu from './SideMenu';
import AllCategories from './categories/AllCategories';
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';
import {useFirebaseConnect} from "react-redux-firebase";
import {PRODUCTS_REF} from "../utils/linkNames";
import AllProducts from "./categories/AllProducts";
import Favorites from "./favorites/Favorites";
import Cart from "./cart/Cart";
import AllOrders from "./orders/AllOrders";
import {scroll} from '../utils/Utils'
import FitnessCategory from "./categories/FitnessCategory";
import TennisCategory from "./categories/TennisCategory";
import OthersCategory from "./categories/OthersCategory";

function App () {
    useFirebaseConnect(PRODUCTS_REF);

    const [selectedPage, setSelectedPage] = useState('');

    return (
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId="main">
                    <SideMenu selectedPage={selectedPage} />
                    <IonRouterOutlet id="main">
                        <Route path="/Categorii" render={(props) => {
                            setSelectedPage("Categorii");
                            return <AllCategories {...props}/>;
                        }} exact={true} onClick={scroll}/>
                        <Route path="/Categorii/fitness" render={(props) => {
                            setSelectedPage("Categorii");
                            return <FitnessCategory {...props}/>;
                        }} exact={true} onClick={scroll}/>
                        <Route path="/Categorii/tenis" render={(props) => {
                            setSelectedPage("Categorii");
                            return <TennisCategory {...props}/>;
                        }} exact={true} onClick={scroll}/>
                        <Route path="/Categorii/diverse" render={(props) => {
                            setSelectedPage("Categorii");
                            return <OthersCategory {...props}/>;
                        }} exact={true} onClick={scroll}/>
                        <Route path="/Produse" render={(props) => {
                            setSelectedPage("Produse");
                            return <AllProducts {...props} onClick={scroll}/>;
                        }} exact={true}/>
                        <Route path="/Favorite" render={(props) => {
                            setSelectedPage("Favorite");
                            return <Favorites {...props}/>;
                        }} exact={true}/>
                        <Route path="/Cos de cumparaturi" render={(props) => {
                            setSelectedPage("Cos de cumparaturi");
                            return <Cart {...props}/>;
                        }} exact={true}/>
                        <Route path="/Comenzi" render={(props) => {
                            setSelectedPage("Comenzi");
                            return <AllOrders {...props}/>;
                        }} exact={true}/>
                        <Route path="/" render={() => <Redirect to="/Categorii" />} exact={true} />
                    </IonRouterOutlet>
                </IonSplitPane>
            </IonReactRouter>
        </IonApp>
    );
}

export default App;

