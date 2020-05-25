import React from 'react'
import ProductCard from './ProductCard';
import {CATEGORIES_LINK} from "../../utils/linkNames";
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
import {renderOfflineMessage} from "../../utils/utils";

export default function CategoryProducts(props) {

    const renderCategoryProducts = () => {
        return (
            <IonContent>
                {
                    props.products.map(product => (
                        <ProductCard product={product} type='add' icon={heartOutline} text='Adauga la favorite'/>
                    ))
                }
            </IonContent>
        )
    };

    const renderList = () => {
        if (window.navigator.onLine) {
            if (props.products === []) {
                return <IonHeader>Nu exista produse disponibile in categoria {props.category}!</IonHeader>
            }
            return renderCategoryProducts();
        }
        return renderOfflineMessage("Sunteti in modul offline! Nu puteti vizualiza produse dintr-o categorie anume")
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
