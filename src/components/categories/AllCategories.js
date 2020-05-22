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
import {openDB} from "idb";

function AllCategories() {

    const products = useSelector(state => {
        let aux = [];
        if (state.firebase.data.products) {
            aux = aux.concat(state.firebase.data.products.fitness);
            aux = aux.concat(state.firebase.data.products.tennis);
            aux = aux.concat(state.firebase.data.products.others);
        }
        return aux.slice(0, 5);
    });

    if (!isLoaded()) {
        return (<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Toate categoriile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                Loading...
            </IonContent>
        </IonPage>)
    }

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
                tx.store.add({value: products, key: 1});
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

