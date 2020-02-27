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
import '../../styles/CategoryCard.css'
import '../../styles/Content.css'

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
            <IonContent id='container'>
                <IonItem id='half-sized-item' routerLink={FITNESS_CATEGORY_LINK}><CategoryCard category='fitness'/></IonItem>
                <IonItem id='half-sized-item' routerLink={TENNIS_CATEGORY_LINK}><CategoryCard category='tenis'/></IonItem>
                <IonItem id='half-sized-item' routerLink={OTHERS_CATEGORY_LINK}><CategoryCard category='diverse'/></IonItem>
            </IonContent>
        </IonPage>
    )
}

export default AllCategories;

