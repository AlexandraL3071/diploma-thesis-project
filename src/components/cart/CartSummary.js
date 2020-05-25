import React from 'react'
import {totalPrice} from "../../utils/utils";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
} from "@ionic/react";
import '../../styles/Cart.css'


export default function CartSummary(props) {

    return (
        <IonCard>
            <IonCardContent>
                <IonCardHeader>Detalii cos</IonCardHeader>
            </IonCardContent>
            <IonCardContent>
                <IonCardTitle>Sumar</IonCardTitle>
            </IonCardContent>
            <IonCardContent>
                <IonItem id='cart-label'>
                    Pana acum
                    aveti: {props.products.length} {props.products.length > 1 ? 'produse' : 'produs'}
                </IonItem>
                <br/>
                <IonItem id='cart-label'>
                    Pret total: {totalPrice(props.products)} RON
                </IonItem>
                <br/>
            </IonCardContent>
        </IonCard>
    )
}

