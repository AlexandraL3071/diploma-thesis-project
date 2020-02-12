import React from 'react'
import {Link} from "react-router-dom";
import {CategoryCard} from "../CategoryCard";
import {useSelector} from "react-redux";
import {isLoaded, useFirebase, useFirebaseConnect} from "react-redux-firebase";

export default function AllCategories() {
    useFirebaseConnect(
        'products'
    );

    const products = useSelector(state => state.firebase.data.products);

    const firebase = useFirebase();

    if (!isLoaded(products)) {
        return <div>Loading...</div>
    }

    const deleteSearchValue = () => {
        firebase.ref('products/searchValue').remove();
    };

    return (
        <div>
            <Link to="/categorii/fitness"><CategoryCard category="fitness"/></Link>
            <Link to="/categorii/tenis"><CategoryCard category="tenis"/></Link>
            <Link to="/categorii/altele"><CategoryCard category="altele"/></Link>
            {deleteSearchValue()}
        </div>
    )
}

