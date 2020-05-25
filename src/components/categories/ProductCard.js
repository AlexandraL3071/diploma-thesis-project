import React, {useState} from 'react'
import '../../styles/ProductCard.css'
import {CART_LINK, CART_PRODUCTS_REF, FAVORITE_LINK, FAVORITE_PRODUCTS_REF} from "../../utils/linkNames";
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCol, IonContent,
    IonGrid,
    IonHeader, IonIcon, IonItem, IonPopover,
    IonRow
} from "@ionic/react";
import {cartOutline} from 'ionicons/icons'
import {useFirebase} from "react-redux-firebase";

export default function ProductCard(props) {

    const firebase = useFirebase();

    const [showPopover, setShowPopover] = useState(false);
    const [nextLink, setNextLink] = useState("");
    const [whereToAdd, setWhereToAdd] = useState("");

    const addToFirebaseCart = () => {
        const cartRef = firebase.push(CART_PRODUCTS_REF, props.product);
        props.product.cartKey = cartRef.key;
        const ref = firebase.ref(CART_PRODUCTS_REF + cartRef.key);
        ref.update({'cartKey': cartRef.key});
        document.documentElement.scrollTop = 0;
        setShowPopover(true);
        setNextLink(CART_LINK);
        setWhereToAdd("in cos");
    };

    const addToFavorites = () => {
        const favoriteRef = firebase.push(FAVORITE_PRODUCTS_REF, props.product);
        props.product.favoriteKey = favoriteRef.key;
        const ref = firebase.ref(FAVORITE_PRODUCTS_REF + favoriteRef.key);
        ref.update({'favoriteKey': favoriteRef.key});
        setShowPopover(true);
        setNextLink(FAVORITE_LINK);
        setWhereToAdd("la favorite");
    };

    const removeFromFavorites = () => {
        return firebase.ref(FAVORITE_PRODUCTS_REF).child(props.product.favoriteKey).remove();
    };

    const handleFavoriteProduct = () => {
        if (props.type === 'add') {
            addToFavorites();
        } else {
            removeFromFavorites();
        }
    };

    const renderNextLink = () => {
        return (
            <IonItem routerLink={nextLink}>
                <IonContent>
                    {window.navigator.onLine ? <IonHeader>Produsul a fost adaugat {whereToAdd}!</IonHeader> :
                        <IonHeader>Sunteti in modul offline! Produsul va fi adaugat {whereToAdd} cand reveniti
                            online</IonHeader>}

                    {window.navigator.onLine ?
                        <IonButton id='centered-button' color='dark' onClick={() => setShowPopover(false)}>Vizualizati
                            produsele</IonButton> : ''}
                </IonContent>
            </IonItem>
        )

    };

    return (
        <IonCard>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <img id='product-image' src={props.product.image}
                                 alt='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTZjizRLdaRI0IgiqG_7F2SmM7kkA7WDb4vgssWmhozCUFwEnH'/>
                        </IonCol>
                        <IonCol>
                            <IonRow>
                                <IonHeader>Denumire:<br/>{props.product.name}</IonHeader>
                            </IonRow>
                            <IonRow>
                                <IonCol>Preț: {props.product.price} RON</IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow>
                        <IonButton color='dark' size='small' onClick={addToFirebaseCart}>
                            <IonIcon slot='start' icon={cartOutline}/>
                            Adaugă în coș
                        </IonButton>
                        <IonButton color='dark' size='small' onClick={handleFavoriteProduct}>
                            <IonIcon slot='start' icon={props.icon}/>
                            {props.text}
                        </IonButton>
                        <IonPopover id='popover' isOpen={showPopover} onDidDismiss={() => setShowPopover(false)}>
                            {renderNextLink()}
                        </IonPopover>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    )
}

