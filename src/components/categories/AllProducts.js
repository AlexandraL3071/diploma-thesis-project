import React from 'react'
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';
import '../../styles/AllProducts.css'
import {isLoaded, isEmpty, useFirebaseConnect} from 'react-redux-firebase';
import {ADD_FAVORITE_LINK, CART_LINK, PRODUCTS_REF} from "../../utils/linkNames";
import '../../styles/Content.css'

export default function AllProducts() {

    useFirebaseConnect(PRODUCTS_REF);

    const products = useSelector(state => state.firebase.data.products);

    const searchValue = useSelector(state => state.firebase.data.products.searchValue);

    if (!isLoaded(products)) {
        return <div>Loading...</div>
    }

    if (isEmpty(products)) {
        return <div>Products List Is Empty</div>
    }

    const renderList = () => {
        if (searchValue === '') {
            return renderProductsList(products);
        } else {
            return renderSearchedProducts(searchedProducts(searchValue))
        }
    };

    const renderProductCards = (products) => {
        return (
            <div>
                {products.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
                                 text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
            </div>
        )
    };

    const renderProductsList = (prod) => {
        return (
            <div id='container'>
                {prod.fitness.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
                                 text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
                {prod.tennis.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
                                 text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
                {prod.others.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon'
                                 text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
            </div>
        )
    };

    const renderSearchedProducts = (products) => {
        return (
            <div>
                {renderProductCards(products)}
            </div>
        )
    };

    const searchProductsByName = (products, searchedProducts, searchValue) => {
        products.map(product => {
            if (product.name.toLowerCase().includes(searchValue)) {
                searchedProducts = [...searchedProducts, product];
            }
        });
        return searchedProducts;
    };

    const searchedProducts = (searchValue) => {
        let searchedProducts = [];

        searchedProducts = searchProductsByName(products.fitness, searchedProducts, searchValue);
        searchedProducts = searchProductsByName(products.tennis, searchedProducts, searchValue);
        searchedProducts = searchProductsByName(products.others, searchedProducts, searchValue);

        return searchedProducts;
    };

    return (
        <div id='view'>
            {renderList()}
            <Link to={CART_LINK}><Button id='button' inverted>Vizualizati cosul de cumparaturi</Button></Link>
        </div>
    )
}
