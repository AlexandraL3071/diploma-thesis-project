import React from 'react'
import {Button} from 'semantic-ui-react';
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';
import {ADD_FAVORITE_LINK, CATEGORIES_LINK} from "../../utils/linkNames";
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

export default function TennisCategory() {
    const tennisProducts = useSelector(state => state.firebase.data.products.tennis);

    const renderList = () => {
        return (
            <IonContent>
                {tennisProducts.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon' text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
            </IonContent>
        )
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Produse din categoria tenis</IonTitle>
                </IonToolbar>
            </IonHeader>

            {renderList()}
            <IonRouterLink href={CATEGORIES_LINK}><IonButton id='button' color='dark'>Inapoi</IonButton></IonRouterLink>
        </IonPage>
    )
}
