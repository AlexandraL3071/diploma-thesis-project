import ProductCard from './ProductCard';
import React from 'react';
import {useSelector} from 'react-redux';
import { CATEGORIES_LINK, FAVORITE_LINK} from "../../utils/linkNames";
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

export default function OthersCategory() {
    const othersProducts = useSelector(state => state.firebase.data.products.others);

    const renderList = () => {
        return (
            <IonContent id='container'>
                {othersProducts.map(product => (
                    <ProductCard product={product} type='add' icon={heartOutline} text='Adauga la favorite' link={FAVORITE_LINK}/>
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
                    <IonTitle>Produse din diverse categorii</IonTitle>
                </IonToolbar>
            </IonHeader>

            {renderList()}
            <IonRouterLink href={CATEGORIES_LINK}><IonButton id='button' color='dark'>Inapoi</IonButton></IonRouterLink>
        </IonPage>
    )
}
