import React from 'react'
import {isEmpty, isLoaded, useFirebaseConnect} from 'react-redux-firebase';
import {useSelector} from 'react-redux';
import ProductCard from '../categories/ProductCard';
import {FAVORITE_LINK, PRODUCTS_REF} from '../../utils/linkNames';
import '../../styles/Content.css'

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
            <div id='container'>
                {
                    products.map(product => (
                        <ProductCard product={product} type='remove' button='ui basic red button'
                                     icon='trash alternate outline icon' text='Sterge din favorite' link={FAVORITE_LINK}/>
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
