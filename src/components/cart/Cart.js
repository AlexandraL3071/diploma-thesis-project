import React from 'react'
import CartSummary from './CartSummary';
import CartDetails from './CartDetails';
import '../../styles/Cart.css'
import '../../styles/Content.css'
import {useSelector} from 'react-redux';
import {useFirebaseConnect} from 'react-redux-firebase';
import {PRODUCTS_REF} from "../../utils/linkNames";
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

export default function Cart() {
    useFirebaseConnect(PRODUCTS_REF);

    const cartProducts = useSelector(state =>
        state.firebase.data.products && state.firebase.data.products.cartProducts
            ? state.firebase.data.products.cartProducts : []
    );

    const products = () => {
        if (cartProducts === undefined || cartProducts === []) {
            return [];
        }
        return Object.values(cartProducts);
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
