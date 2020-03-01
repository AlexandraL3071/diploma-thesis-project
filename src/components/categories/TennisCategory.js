import React from 'react'
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';
import {CATEGORIES_LINK, FAVORITE_LINK} from "../../utils/linkNames";
import '../../styles/AllProducts.css'
import '../../styles/Content.css'
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {heartOutline} from "ionicons/icons";

export default function TennisCategory() {
    const tennisProducts = useSelector(state =>
        state.firebase.data.products && state.firebase.data.products.tennis
            ? state.firebase.data.products.tennis : []
    );
    const renderNoProductsMessage = () => {
        return (
            <IonContent>
                Produsele din categoria tenis nu au fost incarcate inca!</IonContent>
        )
    };

    const renderList = () => {
        return (
            <IonContent>
                {tennisProducts.length > 0 ? tennisProducts.map(product => (
                    <ProductCard product={product} type='add' icon={heartOutline} text='Adauga la favorite'
                                 link={FAVORITE_LINK}/>
                )) : renderNoProductsMessage()}
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
                    <IonTitle>Produse din categoria tenis</IonTitle>
                </IonToolbar>
            </IonHeader>

            {renderList()}
            <IonRouterLink href={CATEGORIES_LINK}><IonButton id='button' color='dark'>Inapoi</IonButton></IonRouterLink>
        </IonPage>
    )
}
