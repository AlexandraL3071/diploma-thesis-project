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
import '../../styles/CategoryCard.css'
import '../../styles/Content.css'
import {openDB} from "idb";

function AllCategories(props) {

    const saveToIndexedDB = () => {
        if (window.navigator.onLine) {
            let db = openDB('products-store', 1, {
                    upgrade(db) {
                        db.createObjectStore('products', {keyPath: 'id', autoIncrement: true});
                    }
                },
            );
            db.then(db => {
                let tx = db.transaction('products', 'readwrite');
                tx.store.clear();
                tx.store.add({value: props.products.slice(0, 5), key: 1});
                return tx.complete
            })
        }
    };

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

            <IonContent id='container'>
                <IonItem id='half-sized-item' routerLink={FITNESS_CATEGORY_LINK}><CategoryCard
                    category='fitness'/></IonItem>
                <IonItem id='half-sized-item' routerLink={TENNIS_CATEGORY_LINK}><CategoryCard
                    category='tenis'/></IonItem>
                <IonItem id='half-sized-item' routerLink={OTHERS_CATEGORY_LINK}><CategoryCard
                    category='diverse'/></IonItem>
            </IonContent>
            {saveToIndexedDB()}
        </IonPage>
    )
}

export default AllCategories;

