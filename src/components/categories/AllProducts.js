import React, {useEffect, useState} from 'react'
import '../../styles/AllProducts.css'
import {CATEGORIES_LINK, PRODUCTS_REF} from "../../utils/linkNames";
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
import {useFirebaseConnect} from "react-redux-firebase";
import {openDB} from "idb";
import {getArrayFromSpecificIndex} from "../../utils/Utils";
import ProductsPage from "../ProductsPage";
import {useSelector} from "react-redux";

export default function AllProducts() {
    useFirebaseConnect(PRODUCTS_REF);
    const [pageNumber, setPageNumber] = useState(0);
    const [productsOffline, setProductsOffline] = useState([]);

    const productsOnline = useSelector(state => {
        let aux = [];
        if (state.firebase.data.products) {
            console.log("on online, from firebase");
            aux = aux.concat(state.firebase.data.products.fitness);
            aux = aux.concat(state.firebase.data.products.tennis);
            aux = aux.concat(state.firebase.data.products.others);
        }
        return aux;
    });

    useEffect(() => {
        if (!window.navigator.onLine) {
            let db = openDB('products-store', 1);
            db.then(function (db) {
                let tx = db.transaction('products', 'readonly');
                let request = tx.objectStore('products').getAll();
                request.then(data => {
                    let aux = data[0].value.fitness;
                    aux = aux.concat(data[0].value.tennis);
                    aux = aux.concat(data[0].value.others);
                    setProductsOffline(aux);
                })
            });
            console.log("on offline, from indexedDB: ", productsOffline)
        }
    }, [productsOffline]);

    const callbackFunction = (pageNumber) => {
        setPageNumber(pageNumber);
    };

    const maxPages = () => {
        if (window.navigator.onLine) {
            return ((productsOnline.length) / 5 + 1) | 0;
        }
        return ((productsOffline.length) / 5 + 1) | 0;

    };

    const generateSecondIndex = () => {
        const leftOnLastPage = window.navigator.onLine ? productsOnline.length - (maxPages() - 1) * 5 : productsOffline.length - (maxPages() - 1) * 5;
        if (pageNumber === maxPages() - 1) {
            return pageNumber * 5 + leftOnLastPage;
        }
        return pageNumber * 5 + 5;
    };

    const prod = () => {
        if (window.navigator.onLine) {
            return getArrayFromSpecificIndex(productsOnline, pageNumber * 5, generateSecondIndex());
        }
        return getArrayFromSpecificIndex(productsOffline, pageNumber * 5, generateSecondIndex());

    };

    const renderProducts = () => {
        const products = window.navigator.onLine ? productsOnline : productsOffline;
        return (
            <IonContent>
                <ProductsPage length={products.length} products={prod()} parentCallback={(e) => callbackFunction(e)}/>
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
        const products = window.navigator.onLine ? productsOnline : productsOffline;
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
