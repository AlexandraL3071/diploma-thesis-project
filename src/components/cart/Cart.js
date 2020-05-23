import React from 'react'
import CartSummary from './CartSummary';
import CartDetails from './CartDetails';
import '../../styles/Cart.css'
import '../../styles/Content.css'
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

export default function Cart(props) {

    const products = () => {
        if (props.products === undefined || props.products === []) {
            return [];
        }
        return Object.values(props.products);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Cosul de cumparaturi</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <CartSummary products={products()}/>
                <CartDetails products={products()}/>
            </IonContent>
        </IonPage>
    )
}
