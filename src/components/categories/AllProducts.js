import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProductCard from "../ProductCard";
import {useSelector} from "react-redux";
import '../../styles/AllProducts.css'
import {isLoaded, isEmpty, useFirebaseConnect} from "react-redux-firebase";

export default function AllProducts() {

    // TODO: each item should have an add to cart and add to favorites button
    // which adds them to firebase to products/cart and products/favorites paths
    useFirebaseConnect(
        'products'
    );

    const products = useSelector(state => state.firebase.data.products);

    const searchValue = useSelector(state => state.firebase.data.products.searchValue);

    if (!isLoaded(products)) {
        return <div>Loading...</div>
    }

    if (isEmpty(products)) {
        return <div>Products List Is Empty</div>
    }

    const getSearchValue = () => {
        const arrayValue = Object.values(searchValue);
        return arrayValue[0].searchValue
    };

    const renderList = () => {
        if (searchValue === undefined) {
            return renderProductsList(products);
        } else {
            return renderSearchedProducts(searchedProducts(getSearchValue()))
        }
    };

    const renderProductsList = (prod) => {
        return (
            <div>
                {prod.fitness.map(product => (
                    <ProductCard product={product} type="add" button="ui basic pink button" icon="heart icon" text="Adauga la favorite" link="/categorii/adaugare-favorite"/>
                ))}
                {prod.tennis.map(product => (
                    <ProductCard product={product} type="add" button="ui basic pink button" icon="heart icon" text="Adauga la favorite" link="/categorii/adaugare-favorite"/>
                ))}
                {prod.others.map(product => (
                    <ProductCard product={product} type="add" button="ui basic pink button" icon="heart icon" text="Adauga la favorite" link="/categorii/adaugare-favorite"/>
                ))}
            </div>
        )
    };

    const renderSearchedProducts = (products) => {
        return (
            <div>
                {products.map(product => (
                    <ProductCard product={product} type="add" button="ui basic pink button" icon="heart icon" text="Adauga la favorite" link="/categorii/adaugare-favorite"/>
                ))}
            </div>
        )
    };

    const searchedProducts = (searchValue) => {
        let searchedProducts = [];

        products.fitness.map(product => {
            if (product.name === searchValue) {
                searchedProducts = [...searchedProducts, product];
            }
        });

        products.tennis.map(product => {
            if (product.name === searchValue) {
                searchedProducts = [...searchedProducts, product];
            }
        });

        products.others.map(product => {
            if (product.name === searchValue) {
                searchedProducts = [...searchedProducts, product];
            }
        });

        return searchedProducts;
    };

    return (
        <div id="view">
            <div id="view">
                {renderList()}
            </div>
            <Link to="cos-cumparaturi"><Button inverted>Vizualizati cosul de cumparaturi</Button></Link>
        </div>
    )
}
