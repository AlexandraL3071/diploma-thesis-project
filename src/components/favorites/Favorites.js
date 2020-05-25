import React from 'react'
import ProductCard from '../categories/ProductCard';
import '../../styles/Content.css'
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {trashOutline} from "ionicons/icons";
import {renderOfflineMessage} from "../../utils/utils";

export default function Favorites(props) {

    const renderFavoriteProducts = () => {
        const products = Object.values(props.products);

        return (
            <IonContent>
                {
                    products.map(product => (

                        <ProductCard product={product} type='remove'
                                     icon={trashOutline} text='Sterge din favorite'/>
                    ))
                }
            </IonContent>
        )
    };

    const renderList = () => {
        if (window.navigator.onLine) {
            if (props.products === undefined) {
                return <IonContent><IonHeader>Nu ati marcat niciun produs ca fiind favorit!</IonHeader></IonContent>;
            }

            return renderFavoriteProducts();
        }

        return renderOfflineMessage("Sunteti in modul offline! Nu puteti vizualiza produsele favorite");
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Favorite</IonTitle>
                </IonToolbar>
            </IonHeader>

            {renderList()}
        </IonPage>
    )
}
