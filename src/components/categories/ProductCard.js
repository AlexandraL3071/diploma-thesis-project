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

    const addToFirebaseCart = () => {
        const cartRef = firebase.push(CART_PRODUCTS_REF, props.product);
        props.product.cartKey = cartRef.key;
        const ref = firebase.ref(CART_PRODUCTS_REF + cartRef.key);
        ref.update({'cartKey': cartRef.key});
        document.documentElement.scrollTop = 0;
        setShowPopover(true);
        setNextLink('cart');
    };

    const addToFavorites = () => {
        const favoriteRef = firebase.push(FAVORITE_PRODUCTS_REF, props.product);
        props.product.favoriteKey = favoriteRef.key;
        const ref = firebase.ref(FAVORITE_PRODUCTS_REF + favoriteRef.key);
        ref.update({'favoriteKey': favoriteRef.key});
        setShowPopover(true);
        setNextLink('favorites')
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
        document.documentElement.scrollTop = 0;
    };

    const renderNextLink = () => {
        if (nextLink === 'cart') {
            return (
                <IonItem routerLink={CART_LINK}>
                    <IonContent>
                        <IonHeader>Produsul a fost adaugat in cosul de cumparaturi!</IonHeader>
                        <IonButton id='centered-button' color='dark' onClick={() => setShowPopover(false)}>Vizualizati cosul de cumparaturi</IonButton>
                    </IonContent>
                </IonItem>

            )
        } else {
            return (
                <IonItem routerLink={FAVORITE_LINK}>
                    <IonContent>
                        <IonHeader>Produsul a fost marcat ca favorit!</IonHeader>
                        <IonButton color='dark' onClick={() => setShowPopover(false)}>Vizualizati produsele favorite</IonButton>
                    </IonContent>
                </IonItem>

            )
        }
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
                        <IonPopover id='popover' isOpen={showPopover} onDidDismiss={e => setShowPopover(false)}>
                            {renderNextLink()}
                        </IonPopover>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    )
}

