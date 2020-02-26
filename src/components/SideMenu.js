import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';
import React from 'react';
import {withRouter} from 'react-router-dom';
import {
    bodySharp,
    cardOutline,
    cardSharp,
    cartOutline,
    cartSharp,
    heartOutline,
    heartSharp,
    homeOutline,
    homeSharp,
    shirtOutline,
    shirtSharp,
} from 'ionicons/icons';
import '../styles/SideMenu.css'
import {useFirebaseConnect} from "react-redux-firebase";
import {PRODUCTS_REF} from "../utils/linkNames";

const appPages = [
    {
        title: 'Toate categoriile',
        url: '/Categorii',
        iosIcon: homeOutline,
        mdIcon: homeSharp
    },
    {
        title: 'Produse',
        url: '/Produse',
        iosIcon: shirtOutline,
        mdIcon: shirtSharp
    },
    {
        title: 'Produse favorite',
        url: '/Favorite',
        iosIcon: heartOutline,
        mdIcon: heartSharp
    },
    {
        title: 'Cosul de cumparaturi',
        url: '/Cos de cumparaturi',
        iosIcon: cartOutline,
        mdIcon: cartSharp
    },
    {
        title: 'Comenzi',
        url: '/Comenzi',
        iosIcon: cardOutline,
        mdIcon: cardSharp
    }
];

function Menu(props) {
    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>Articole sportive</IonListHeader>
                    <IonIcon slot="start" icon={bodySharp}/>
                    <IonNote>pentru energie, pentru sanatate</IonNote>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={props.selectedPage === appPage.title ? 'selected' : ''}
                                         routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon slot="start" icon={appPage.iosIcon}/>
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default withRouter(Menu);

// state = {activeItem: 'Categorii'};
    //
    // handleItemClick = (e, {name}) => this.setState({activeItem: name});
    //
    // render() {
    //     const {activeItem} = this.state;
    //
    //     return (
    //         <div>
    //             <Menu id='container' attached='top' tabular inverted>
    //                 <Link to={CATEGORIES_LINK}><Menu.Item
    //                     name='Categorii'
    //                     active={activeItem === 'Categorii'}
    //                     onClick={this.handleItemClick}
    //                 /></Link>
    //                 <Link to={PRODUCTS_LINK}><Menu.Item
    //                     name='Toate produsele'
    //                     active={activeItem === 'Toate produsele'}
    //                     onClick={this.handleItemClick}
    //                 /></Link>
    //                 <Link to={FAVORITE_LINK}><Menu.Item
    //                     name='Favorite'
    //                     active={activeItem === 'Favorite'}
    //                     onClick={this.handleItemClick}
    //                 /></Link>
    //                 <Link to={CART_LINK}><Menu.Item
    //                     name='Cosul meu'
    //                     active={activeItem === 'Cosul meu'}
    //                     onClick={this.handleItemClick}
    //                 /></Link>
    //                 <Link to={ORDERS_LINK}><Menu.Item
    //                     name='Comenzi plasate'
    //                     active={activeItem === 'Comenzi plasate'}
    //                     onClick={this.handleItemClick}
    //                 /></Link>
    //             </Menu>
    //
    //             <div className='ui divider'/>
    //
    //             <Segment id='segment' attached='bottom' inverted>
    //                 <Switch>
    //                     <Route exact path={CATEGORIES_LINK}><AllCategories/></Route>
    //                     <Route exact path={PRODUCTS_LINK}><AllProducts/></Route>
    //                     <Route exact path={FAVORITE_LINK}><Favorites/></Route>
    //                     <Route exact path={CART_LINK}><Cart/></Route>
    //                     <Route exact path={ORDERS_LINK}><AllOrders/></Route>
    //                     <Route exact path={FITNESS_CATEGORY_LINK}><FitnessCategory/></Route>
    //                     <Route exact path={TENNIS_CATEGORY_LINK}><TennisCategory/></Route>
    //                     <Route exact path={OTHERS_CATEGORY_LINK}><OthersCategory/></Route>
    //                     <Route exact path={ADD_CART_LINK}><ConfirmationModal okLink={CATEGORIES_LINK} goLink={CART_LINK}
    //                                                                          okText='OK'
    //                                                                          buttonText='Vizualizati cosul de cumparaturi'
    //                                                                          content='Produsul a fost adaugat in cos!'
    //                                                                          title='Produs adaugat'/>
    //                     </Route>
    //                     <Route exact path={ADD_FAVORITE_LINK}><ConfirmationModal okLink={CATEGORIES_LINK} goLink={FAVORITE_LINK}
    //                                                                              okText='OK'
    //                                                                              buttonText='Vizualizati produsele favorite'
    //                                                                              content='Ati marcat produsul ca fiind favorit!'
    //                                                                              title='Produs favorit'/>
    //                     </Route>
    //                     <Route exact path={PLACE_ORDER_LINK}><ConfirmationModal okLink={PRODUCTS_LINK} goLink={CART_LINK}
    //                                                                             okText='Vezi si alte produse'
    //                                                                             buttonText='Inapoi la cosul de cumparaturi'
    //                                                                             content='Comanda a fost plasata!'
    //                                                                             title='Comanda plasata'/>
    //                     </Route>
    //                 </Switch>
    //             </Segment>
    //         </div>
    //     )
    // }
//}
