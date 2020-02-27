import React from 'react';
import {useSelector} from 'react-redux';
import {useFirebaseConnect} from 'react-redux-firebase';
import OrderCard from './OrderCard';
import {PRODUCTS_REF} from "../../utils/linkNames";
import '../../styles/Content.css'
import '../../styles/OrderProducts.css'
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";

export default function AllOrders() {
    let orderNumber = 1;
    useFirebaseConnect(PRODUCTS_REF);

    const orders = useSelector(state => state.firebase.data.products.orders);

    const renderAllOrders = () => {
        return (
            <IonContent id='container'>
                {
                    Object.values(orders).map(order => (
                        <OrderCard order={order} orderNumber={orderNumber++}/>
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
                    <IonTitle>Toate comenzile</IonTitle>
                </IonToolbar>
            </IonHeader>

            {orders === undefined ? <IonHeader>Nu a fost plasata nicio comanda</IonHeader> : renderAllOrders()}
        </IonPage>
    )
}
