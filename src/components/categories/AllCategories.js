import React from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader, IonItem,
    IonMenuButton,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import CategoryCard from './CategoryCard';
import {
    FITNESS_CATEGORY_LINK, TENNIS_CATEGORY_LINK, OTHERS_CATEGORY_LINK, PRODUCTS_REF
} from '../../utils/linkNames';
import {isLoaded, useFirebaseConnect} from "react-redux-firebase";
import {useSelector} from "react-redux";

function AllCategories(props) {
    if (!isLoaded()) {
        return <IonContent>
            Loading...
        </IonContent>
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Toate categoriile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonItem routerLink={FITNESS_CATEGORY_LINK}><CategoryCard category='fitness'/></IonItem>
                <IonItem routerLink={TENNIS_CATEGORY_LINK}><CategoryCard category='tenis'/></IonItem>
                <IonItem routerLink={OTHERS_CATEGORY_LINK}><CategoryCard category='diverse'/></IonItem>
            </IonContent>
        </IonPage>
    )
};

export default AllCategories;

