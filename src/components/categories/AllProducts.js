import React, {useEffect, useState} from 'react'
import '../../styles/AllProducts.css'
import {CATEGORIES_LINK} from "../../utils/linkNames";
import '../../styles/Content.css'
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {openDB} from "idb";
import {getArrayFromSpecificIndex} from "../../utils/utils";
import ProductsPage from "./ProductsPage";

export default function AllProducts(props) {

    const [pageNumber, setPageNumber] = useState(0);
    const [productsOffline, setProductsOffline] = useState([]);

    useEffect(() => {
        if (!window.navigator.onLine) {
            let db = openDB('products-store', 1);
            db.then(function (db) {
                let tx = db.transaction('products', 'readonly');
                let request = tx.objectStore('products').getAll();
                request.then(data => {
                    setProductsOffline(data[0].value);
                })
            });
        }
    }, [productsOffline]);

    const callbackFunction = (pageNumber) => {
        setPageNumber(pageNumber);
    };

    const maxPages = (products) => {
        return ((products.length) / 5 + 1) | 0;
    };

    const generateSecondIndex = (products) => {
        const noPages = maxPages(products);

        const leftOnLastPage = products.length - (noPages - 1) * 5;

        if (pageNumber === noPages - 1) {
            return pageNumber * 5 + leftOnLastPage;
        }
        return pageNumber * 5 + 5;
    };

    const prod = (products) => {
        return getArrayFromSpecificIndex(products, pageNumber * 5, generateSecondIndex(products));
    };

    const renderProducts = () => {
        const products = window.navigator.onLine ? props.products : productsOffline;

        return (
            <IonContent>
                <ProductsPage length={products.length} products={prod(products)} parentCallback={(e) => callbackFunction(e)}/>
            </IonContent>
        )
    };

    const renderNoProductsMessage = () => {
        return (
            <IonContent>
                Produsele nu sunt disponibile pentru vizualizare inca! Pentru redirectionare apasati aici
                <IonItem routerLink={CATEGORIES_LINK}><IonButton color='dark'>toate categoriile</IonButton></IonItem>
            </IonContent>
        )
    };

    const renderList = () => {
        const products = window.navigator.onLine ? props.products : productsOffline;
        return (
            <IonContent className='class'>
                {products !== undefined ? renderProducts() : renderNoProductsMessage()}
            </IonContent>
        )
    };

    return (
        <IonPage id='container'>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Toate produsele</IonTitle>
                </IonToolbar>
            </IonHeader>

            {renderList()}
        </IonPage>
    )
}
