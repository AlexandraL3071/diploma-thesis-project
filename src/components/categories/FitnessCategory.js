import React from 'react'
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';
import {ADD_FAVORITE_LINK, CATEGORIES_LINK, PRODUCTS_REF} from "../../utils/linkNames";
import '../../styles/AllProducts.css'
import '../../styles/Content.css'
import {
    IonButton,
    IonButtons,
    IonContent, IonHeader,
    IonMenuButton,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar
} from "@ionic/react";

export default function FitnessCategory() {
    const fitnessProducts = useSelector(state => state.firebase.data.products.fitness);

    const renderList = () => {
        return (
            <IonContent>
                {fitnessProducts.map(product => (
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
                    <IonTitle>Produse din categoria fitness</IonTitle>
                </IonToolbar>
            </IonHeader>

            {renderList()}
            <IonRouterLink href={CATEGORIES_LINK}><IonButton id='button' color='dark'>Inapoi</IonButton></IonRouterLink>
        </IonPage>
    )
}
