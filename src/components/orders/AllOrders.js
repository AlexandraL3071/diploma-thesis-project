import React from 'react';
import OrderCard from './OrderCard';
import {CATEGORIES_LINK} from "../../utils/linkNames";
import '../../styles/Content.css'
import '../../styles/OrderProducts.css'
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";

export default function AllOrders(props) {
    let orderNumber = 1;

    const renderNoOrdersAvailableMessage = () => {
        return (
            <IonContent>
                <IonHeader>
                    Comenzile nu sunt disponibile pentru vizualizare inca! Pentru redirectionare apasati aici
                    <IonItem routerLink={CATEGORIES_LINK}><IonButton color='dark'>toate
                        categoriile</IonButton></IonItem>
                </IonHeader>
            </IonContent>
        )
    };

    const renderAllOrders = () => {
        return (
            <IonContent id='container'>
                {
                    Object.values(props.orders).map(order => (
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
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Toate comenzile</IonTitle>
                </IonToolbar>
            </IonHeader>

            {props.orders === undefined ?
                <IonHeader>Nu a fost plasata nicio comanda</IonHeader>
                : props.orders.length === 0 ? renderNoOrdersAvailableMessage() : renderAllOrders()}
        </IonPage>
    )
}
