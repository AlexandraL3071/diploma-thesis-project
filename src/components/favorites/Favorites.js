import React from 'react'
import {useSelector} from 'react-redux';
import ProductCard from '../categories/ProductCard';
import {FAVORITE_LINK, PRODUCTS_REF} from '../../utils/linkNames';
import '../../styles/Content.css'
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {trashOutline} from "ionicons/icons";
import {useFirebaseConnect} from "react-redux-firebase";

export default function Favorites() {
    useFirebaseConnect(PRODUCTS_REF);
    const favoriteProducts = useSelector(state =>
        state.firebase.data.products ? state.firebase.data.products.favoriteProducts : []
    );

    const renderList = () => {
        if (favoriteProducts === undefined) {
            return <IonContent><IonHeader>Nu ati marcat niciun produs ca fiind favorit!</IonHeader></IonContent>
        } else if (favoriteProducts.length === 0) {
            return <IonContent><IonHeader>Momentan nu au fost incarcate produsele favorite!</IonHeader></IonContent>
        }
        const products = Object.values(favoriteProducts);
        return (
            <IonContent>
                {
                    products.map(product => (
                        <ProductCard product={product} type='remove'
                                     icon={trashOutline} text='Sterge din favorite' link={FAVORITE_LINK}/>
                    ))
                }
            </IonContent>
        )
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Favorite</IonTitle>
                </IonToolbar>
            </IonHeader>

            {renderList()}
        </IonPage>
    )
}
