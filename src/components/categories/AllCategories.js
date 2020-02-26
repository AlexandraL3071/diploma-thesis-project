import React from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
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
import {useFirebaseConnect} from "react-redux-firebase";

function AllCategories(props) {
    useFirebaseConnect(PRODUCTS_REF);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Toate categoriile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonRouterLink href={FITNESS_CATEGORY_LINK}><CategoryCard category='fitness'/></IonRouterLink>
                <IonRouterLink href={TENNIS_CATEGORY_LINK}><CategoryCard category='tenis'/></IonRouterLink>
                <IonRouterLink href={OTHERS_CATEGORY_LINK}><CategoryCard category='diverse'/></IonRouterLink>
            </IonContent>
        </IonPage>
    )
};

export default AllCategories;

