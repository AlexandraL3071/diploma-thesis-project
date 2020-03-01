import React from 'react'
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';
import '../../styles/AllProducts.css'
import {CATEGORIES_LINK, FAVORITE_LINK, PRODUCTS_REF} from "../../utils/linkNames";
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
import {heartOutline} from "ionicons/icons";
// import {openDB} from "idb";

export default function AllProducts() {
    useFirebaseConnect(PRODUCTS_REF);
    const products = useSelector(state =>
        state.firebase.data.products ? state.firebase.data.products : []
    );

    // readAllData(st) {
    //     let db = openDB('products-store', 1);
    //     return db
    //         .then(function (db) {
    //             let tx = db.transaction(st, 'readonly');
    //             let store = tx.objectStore(st);
    //             return store.getAll()
    //         })
    // }
    //
    // dbData() {
    //     const data3 = this.readAllData('products')
    //         .then(function (data) {
    //             const data2 = data;
    //             return data2
    //         });
    // }
    //     return prod;
    //     // let db = openDB('products-store', 1);
    //     // let data = db.then(db => {
    //     //     let tx = db.transaction('products', 'readwrite');
    //     //     let request = tx.objectStore('products').getAll();
    //     //     let resultedData = request.then(dataFromPromise => {
    //     //         console.log('from promise',dataFromPromise);
    //     //         return dataFromPromise
    //     //     });
    //     //     return resultedData;
    //     // });
    //     // return data
    // };

    const renderProducts = (products) => {
        return (
            <IonContent>
                {products.fitness.map(product => (
                    <ProductCard product={product} type='add' icon={heartOutline}
                                 text='Adauga la favorite' link={FAVORITE_LINK}/>
                ))}
                {products.tennis.map(product => (
                    <ProductCard product={product} type='add' icon={heartOutline}
                                 text='Adauga la favorite' link={FAVORITE_LINK}/>
                ))}
                {products.others.map(product => (
                    <ProductCard product={product} type='add' icon={heartOutline}
                                 text='Adauga la favorite' link={FAVORITE_LINK}/>
                ))}}
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

    const renderList = (products) => {
        return (
            <IonContent className='class'>
                {products.length === 0 ? renderNoProductsMessage() : renderProducts(products)}
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

            {/*{this.renderList()}*/}
            {renderList(products)}
        </IonPage>
    )

    // let searchValue = '';
    //
    // async function products() {
    //     let products = [];
    //     let db = openDB('products-store', 1, {
    //             upgrade(db) {
    //                 db.createObjectStore('products');
    //             }
    //         },
    //     );
    //
    //      db.then(db => {
    //         let tx = db.transaction('products', 'readwrite');
    //         tx.store.getAll()
    //             .then(data => {
    //                  products = addToArray(data[0]);
    //                  return products;
    //             });
    //        return tx.complete;
    //     });
    //
    // }
    //
    // const renderList = () => {
    //     if (searchValue === '') {
    //         return renderProductsList(products);
    //     } else {
    //         return renderSearchedProducts(searchedProducts(searchValue))
    //     }
    // };
    //
    // const renderProductCards = (products) => {
    //     return (
    //         <div id='container'>
    //             {products.map(product => (
    //                 <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
    //                              text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
    //             ))}
    //         </div>
    //     )
    // };
    //
    // const renderProductsList = (prod) => {
    //     return (
    //         <div id='container'>
    //             {prod.fitness.map(product => (
    //                 <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
    //                              text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
    //             ))}
    //             {prod.tennis.map(product => (
    //                 <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
    //                              text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
    //             ))}
    //             {prod.others.map(product => (
    //                 <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
    //                              text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
    //             ))}
    //         </div>
    //     )
    // };
    //
    // const renderSearchedProducts = (products) => {
    //     return (
    //         <div>
    //             {renderProductCards(products)}
    //         </div>
    //     )
    // };
    //
    // const searchProductsByName = (products, searchedProducts, searchValue) => {
    //     // eslint-disable-next-line array-callback-return
    //     products.map(product => {
    //         if (product.name.toLowerCase().includes(searchValue)) {
    //             searchedProducts = [...searchedProducts, product];
    //         }
    //     });
    //     return searchedProducts;
    // };
    //
    // const searchedProducts = (searchValue) => {
    //     let searchedProducts = [];
    //
    //     searchedProducts = searchProductsByName(products.fitness, searchedProducts, searchValue);
    //     searchedProducts = searchProductsByName(products.tennis, searchedProducts, searchValue);
    //     searchedProducts = searchProductsByName(products.others, searchedProducts, searchValue);
    //
    //     return searchedProducts;
    // };
    //
    // const scroll = () => {
    //     document.documentElement.scrollTop = 0;
    // };
    //
    // return (
    //     <div id='view'>
    //         {console.log(products())}
    //         {/*{renderList()}*/}
    //         <Link to={CART_LINK}><Button id='button' inverted onClick={scroll}>Vizualizati cosul de cumparaturi</Button></Link>
    //     </div>
    // )
}
