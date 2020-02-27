import React from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader, IonItem,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import CategoryCard from './CategoryCard';
import {
    FITNESS_CATEGORY_LINK, TENNIS_CATEGORY_LINK, OTHERS_CATEGORY_LINK
} from '../../utils/linkNames';
import {isLoaded} from "react-redux-firebase";
import {useSelector} from "react-redux";

function AllCategories(props) {
    const products = useSelector(state => state.firebase.data.products);

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

            {console.log(products)}
            <IonContent>
                <IonItem routerLink={FITNESS_CATEGORY_LINK}><CategoryCard category='fitness'/></IonItem>
                <IonItem routerLink={TENNIS_CATEGORY_LINK}><CategoryCard category='tenis'/></IonItem>
                <IonItem routerLink={OTHERS_CATEGORY_LINK}><CategoryCard category='diverse'/></IonItem>
            </IonContent>
        </IonPage>
    )
}

export default AllCategories;

