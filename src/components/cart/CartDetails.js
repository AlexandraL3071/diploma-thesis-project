import React, {useState} from 'react'
import CartProducts from './CartProducts';
import '../../styles/CartDetails.css'
import '../../styles/Cart.css'
import {useFirebase} from 'react-redux-firebase';
import {
    CART_PRODUCTS_REF,
    CATEGORIES_LINK,
    ORDERS_LINK,
    ORDERS_REF
} from "../../utils/linkNames";
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonContent, IonHeader, IonItem,
    IonItemDivider, IonPopover,
    IonRouterLink
} from "@ionic/react";

export default function CartDetails(props) {

    const firebase = useFirebase();
    const [showPopover, setShowPopover] = useState(false);

    const addToFirebaseOrders = () => {
        const orderDate = new Date();
        const orderRef = firebase.push(ORDERS_REF, props.products);
        props.products.orderRef = orderRef;
        props.products.orderDate = orderDate;
        const ref = firebase.ref(ORDERS_REF + orderRef.key);
        ref.update({'orderKey': orderRef.key, 'orderDate': orderDate});
        firebase.ref(CART_PRODUCTS_REF).remove();
        document.documentElement.scrollTop = 0;
        setShowPopover(true);
    };

    const renderNextLink = () => {
        return (
            <IonItem routerLink={ORDERS_LINK}>
                <IonContent>
                    {window.navigator.onLine ? <IonHeader>Comanda a fost plasata!</IonHeader> :
                        <IonHeader>Sunteti in modul offline! Comanda va fi plasata cand reveniti
                            online</IonHeader>}
                    {window.navigator.onLine ?
                        <IonButton id='centered-button' color='dark' onClick={() => setShowPopover(false)}>Vizualizati
                            toate comenzile</IonButton> : ''}
                </IonContent>
            </IonItem>
        )
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
            <IonPopover id='popover' isOpen={showPopover} onDidDismiss={() => setShowPopover(false)}>
                {renderNextLink()}
            </IonPopover>
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
