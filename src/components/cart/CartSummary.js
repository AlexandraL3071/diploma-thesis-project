import React from 'react'
import {totalNumberOfProducts} from "../../utils/Utils";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
} from "@ionic/react";


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
                <IonItem style={{marginLeft: '10px', color: 'white'}}>
                    Pana acum
                    aveti: {props.products.length} {totalNumberOfProducts(props.products) > 1 ? 'produse' : 'produs'}
                </IonItem>
                <br/>
                <IonItem style={{marginLeft: '10px', color: 'white'}}>
                    Pret total: {totalNumberOfProducts(props.products)} RON
                </IonItem>
                <br/>
            </IonCardContent>
        </IonCard>
    )
}

