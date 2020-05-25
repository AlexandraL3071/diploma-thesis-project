import React from 'react';
import {withRouter} from 'react-router-dom';
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
import '../styles/SideMenu.css';

const appPages = [
    {
        title: 'Categorii',
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
