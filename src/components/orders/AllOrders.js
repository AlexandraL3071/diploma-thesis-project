import React from 'react';
import OrderCard from './OrderCard';
import '../../styles/Content.css'
import '../../styles/OrderProducts.css'
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {renderOfflineMessage} from "../../utils/utils";

export default function AllOrders(props) {

    let orderNumber = 1;

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

    const renderList = () => {
        if (window.navigator.onLine) {
            if (props.orders === []) {
                return <IonHeader>Nu a fost plasata nicio comanda</IonHeader>
            }
            return renderAllOrders();
        }
        return renderOfflineMessage("Sunteti in modul offline! Nu puteti vizualiza comenzile plasate.");
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

            {renderList()}
        </IonPage>
    )
}
