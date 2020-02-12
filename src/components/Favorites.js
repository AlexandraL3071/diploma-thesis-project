import React from 'react'
import {isEmpty, isLoaded, useFirebaseConnect} from "react-redux-firebase";
import {useSelector} from "react-redux";
import ProductCard from "./ProductCard";

export default function Favorites() {
    // TODO: here we should have a button which retrieves the favorites saed to firebase
    // to products/favorites path and also one which removes a favorite from this list and
    // from firebase as well
    useFirebaseConnect(
        'products'
    );

    const favoriteProducts = useSelector(state => state.firebase.data.products.favoriteProducts);

    if (!isLoaded(favoriteProducts)) {
        return <div>Loading favorite products...</div>
    }

    if (isEmpty(favoriteProducts)) {
        return <div>Favorite Products List Is Empty</div>
    }

    const renderList = () => {
        const products = Object.values(favoriteProducts);
        return (
            <div>
                {products.map(product => (
                    <ProductCard product={product} type="remove" button="ui basic red button" icon="trash alternate outline icon" text="Sterge de la favorite"/>
                ))}
            </div>
        )
    };

    return (
        <div>
            {renderList()}
        </div>
    )
}
