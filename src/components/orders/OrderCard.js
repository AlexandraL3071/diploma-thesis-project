import React from 'react'
import {useFirebase} from 'react-redux-firebase';
import {canBeCancelled, orderDate, totalNumberOfProducts, totalPrice} from '../../utils/Utils';
import {ORDERS_REF} from "../../utils/linkNames";
import '../../styles/OrderProducts.css'
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonItem
} from "@ionic/react";
import {trashOutline} from "ionicons/icons";

export default function OrderCard(props) {
    const firebase = useFirebase();

    const cancelOrder = () => {
        return firebase.ref(ORDERS_REF).child(props.order.orderKey).remove();
    };

    return (
        <IonCard>
            <IonCardContent>
                <IonCardHeader>Comanda nr {props.orderNumber}</IonCardHeader>
            </IonCardContent>
            <IonCardContent>
                <IonCardTitle>Detaliile comenzii</IonCardTitle>
            </IonCardContent>
            <IonCardContent className='content'>
                <IonItem>
                    Ati comandat un numar
                    de: {totalNumberOfProducts(Object.values(props.order))} {totalNumberOfProducts(Object.values(props.order)) === 1 ? 'produs' : 'produse'}
                </IonItem>
                <br/>
                <IonItem>
                    Valoarea totala a comenzii: {totalPrice(Object.values(props.order))} RON
                </IonItem>
                <br/>
                <IonItem>
                    Data plasarii comenzii: {orderDate(props.order.orderDate)}
                </IonItem>
                <br/>
            </IonCardContent>
            {
                canBeCancelled(props.order.orderDate) === true ?
                    <IonCardContent>
                        <IonButton color='dark' onClick={cancelOrder}>
                            <IonIcon className={trashOutline}/>
                            Anuleaza comanda
                        </IonButton></IonCardContent> :
                    <IonCardContent id='extra-content'>Comanda nu mai poate fi anulata</IonCardContent>
            }
        </IonCard>
    )
}
