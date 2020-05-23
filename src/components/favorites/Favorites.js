import React from 'react'
import ProductCard from '../categories/ProductCard';
import {FAVORITE_LINK} from '../../utils/linkNames';
import '../../styles/Content.css'
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {trashOutline} from "ionicons/icons";

export default function Favorites(props) {
    const renderList = () => {
        if (props.products === undefined) {
            return <IonContent><IonHeader>Nu ati marcat niciun produs ca fiind favorit!</IonHeader></IonContent>
        } else if (props.products.length === 0) {
            return <IonContent><IonHeader>Momentan nu au fost incarcate produsele favorite!</IonHeader></IonContent>
        }

        const products = Object.values(props.products);

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
