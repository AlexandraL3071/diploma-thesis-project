import React from 'react'
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';
import '../../styles/AllProducts.css'
import {ADD_FAVORITE_LINK, CART_LINK} from "../../utils/linkNames";
import '../../styles/Content.css'
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {scroll} from '../../utils/Utils'

export default function AllProducts() {
    const products = useSelector(state => state.firebase.data.products);

    const renderList = (products) => {
        return (
            <IonContent>
                {products.fitness.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
                                 text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
                {products.tennis.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
                                 text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
                {products.others.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
                                 text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
            </IonContent>
        )
    };

    return (
        <IonPage>
            {scroll()}
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Toate produsele</IonTitle>
                </IonToolbar>
            </IonHeader>

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
