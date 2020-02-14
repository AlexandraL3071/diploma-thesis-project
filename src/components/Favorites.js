import React from 'react'
import {isEmpty, isLoaded, useFirebaseConnect} from 'react-redux-firebase';
import {useSelector} from 'react-redux';
import ProductCard from './ProductCard';
import {FAVORITE_LINK, PRODUCTS_REF} from '../utils/linkNames';

export default function Favorites() {
    useFirebaseConnect(PRODUCTS_REF);

    const favoriteProducts = useSelector(state => state.firebase.data.products.favoriteProducts);

    if (!isLoaded(favoriteProducts)) {
        return <div>There are no favorite products</div>
    }

    if (isEmpty(favoriteProducts)) {
        return <div>Favorite Products List Is Empty</div>
    }

    const renderList = () => {
        const products = Object.values(favoriteProducts);
        return (
            <div>
                {
                    products.map(product => (
                        <ProductCard product={product} type='remove' button='ui basic red button'
                                     icon='trash alternate outline icon' text='Sterge de la favorite' link={FAVORITE_LINK}/>
                    ))
                }
            </div>
        )
    };

    return (
        <div>
            {renderList()}
        </div>
    )
}
