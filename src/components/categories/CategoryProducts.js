import React from 'react'
import ProductCard from './ProductCard';
import {CATEGORIES_LINK, FAVORITE_LINK} from "../../utils/linkNames";
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
import {heartOutline} from "ionicons/icons";

export default function CategoryProducts(props) {
    const renderNoProductsMessage = () => {
        return (
            <IonContent>
                Produsele din categoria {props.category} nu au fost incarcate inca!
            </IonContent>
        )
    };

    const renderList = () => {
        return (
            <IonContent>
                {props.products.length > 0 ? props.products.map(product => (
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
                    <IonTitle>Produse din categoria {props.category}</IonTitle>
                </IonToolbar>
            </IonHeader>

            {renderList()}
            <IonRouterLink href={CATEGORIES_LINK}><IonButton id='button' color='dark'>Inapoi</IonButton></IonRouterLink>
        </IonPage>
    )
}
