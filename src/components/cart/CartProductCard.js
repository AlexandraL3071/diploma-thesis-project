import React from 'react'
import '../../styles/CartProductCard.css'
import {useFirebase} from 'react-redux-firebase';
import {CART_PRODUCTS_REF} from "../../utils/linkNames";
import {IonCard, IonCardContent, IonCol, IonGrid, IonIcon, IonItem, IonRow} from "@ionic/react";
import {trashOutline} from "ionicons/icons";

export default function CartProductCard(props) {
    const firebase = useFirebase();

    const deleteFromCart = () => {
        return firebase.ref(CART_PRODUCTS_REF).child(props.product.cartKey).remove();
    };

    return (
        <IonCard id='full-width'>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol id='first-column'>
                            <IonItem>{props.product.name}</IonItem>
                        </IonCol>
                        <IonCol id='second-column'>
                            <IonItem>{props.product.price} RON</IonItem>
                        </IonCol>
                        <IonCol id='third-column'>
                            <IonIcon id='icon' icon={trashOutline} onClick={deleteFromCart}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    )
}
