import React from 'react'
import {Link} from "react-router-dom";
import {CategoryCard} from "../CategoryCard";
import {useSelector} from "react-redux";
import {isLoaded, useFirebaseConnect} from "react-redux-firebase";

export default function AllCategories() {
    useFirebaseConnect(
        'products'
    );

    const products = useSelector(state => state.firebase.data.products);

    if (!isLoaded(products)) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Link to="/categorii/fitness"><CategoryCard category="culturism"/></Link>
            <Link to="/categorii/tenis"><CategoryCard category="tenis"/></Link>
            <Link to="/categorii/altele"><CategoryCard category="altele"/></Link>
        </div>
    )
}

