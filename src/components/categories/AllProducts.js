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

export default function AllProducts() {
    useFirebaseConnect(PRODUCTS_REF);
    const [pageNumber, setPageNumber] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let db = openDB('products-store', 1);
        db.then(function (db) {
                    let tx = db.transaction('products', 'readonly');
                    let request = tx.objectStore('products').getAll();
                    request.then(data => {
                        let aux = data[0].value.fitness;
                        aux = aux.concat(data[0].value.tennis);
                        aux = aux.concat(data[0].value.others);
                        setProducts(aux);
                    })
                })
    },[products]);

    const callbackFunction = (pageNumber) => {
        setPageNumber(pageNumber);
    };

    const maxPages = () => {
      return ((products.length)/5 + 1) | 0;
    };

    const generateSecondIndex = () => {
        const leftOnLastPage = products.length - (maxPages() - 1)*5;
        if (pageNumber === maxPages() - 1) {
            return pageNumber*5 + leftOnLastPage;
        }
        return pageNumber*5 + 5;
    };

    const prod = () => {
        return getArrayFromSpecificIndex(products, pageNumber*5, generateSecondIndex());
    };

    const renderProducts = () => {
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
        return (
            <IonContent className='class'>
                {products.length !== 0 ? renderProducts() : renderNoProductsMessage()}
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
