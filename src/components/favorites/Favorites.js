import React from 'react'
import {isEmpty, isLoaded, useFirebaseConnect} from 'react-redux-firebase';
import {useSelector} from 'react-redux';
import ProductCard from '../categories/ProductCard';
import {FAVORITE_LINK, PRODUCTS_REF} from '../../utils/linkNames';
import '../../styles/Content.css'
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";

export default function Favorites() {
    const favoriteProducts = useSelector(state => state.firebase.data.products.favoriteProducts);

    const renderList = () => {
        const products = Object.values(favoriteProducts);
        return (
            <IonContent>
                {
                    products.map(product => (
                        <ProductCard product={product} type='remove' button='ui basic red button'
                                     icon='trash alternate outline icon' text='Sterge din favorite' link={FAVORITE_LINK}/>
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
