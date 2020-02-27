import React from 'react'
import CartProducts from './CartProducts';
import '../../styles/CartDetails.css'
import '../../styles/Cart.css'
import {useFirebase} from 'react-redux-firebase';
import {CART_PRODUCTS_REF, CATEGORIES_LINK, ORDERS_REF} from "../../utils/linkNames";
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItemDivider,
    IonRouterLink
} from "@ionic/react";

export default function CartDetails(props) {
    const firebase = useFirebase();

    const addToFirebaseOrders = () => {
        const orderDate = new Date();
        const orderRef = firebase.push(ORDERS_REF, props.products);
        props.products.orderRef = orderRef;
        props.products.orderDate = orderDate;
        const ref = firebase.ref(ORDERS_REF + orderRef.key);
        ref.update({'orderKey': orderRef.key, 'orderDate': orderDate});
        firebase.ref(CART_PRODUCTS_REF).remove();
        document.documentElement.scrollTop = 0;
    };

    return (
        <IonCard>
            <IonCardContent>
                <IonCardHeader>Produsele tale</IonCardHeader>
            </IonCardContent>
            <IonCardContent>
                <IonCardTitle>Pana acum ai adaugat produsele:</IonCardTitle>
            </IonCardContent>
            <CartProducts products={props.products}/>
            {
                props.products.length > 0 ?
                    <IonCardContent>
                        <IonButton color='dark'
                                   onClick={addToFirebaseOrders}>Plaseaza comanda
                        </IonButton>
                    </IonCardContent>
                    : ''
            }
            <IonItemDivider/>
            <IonCardContent>
                <IonCardSubtitle>
                    Doriti sa vedeti si alte categorii de produse? Click <IonRouterLink
                    href={CATEGORIES_LINK}><u>aici</u></IonRouterLink>
                </IonCardSubtitle>
            </IonCardContent>
        </IonCard>
    )
}
