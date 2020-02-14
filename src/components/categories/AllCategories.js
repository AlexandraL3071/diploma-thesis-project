import React from 'react'
import {Link} from 'react-router-dom';
import {CategoryCard} from './CategoryCard';
import {useSelector} from 'react-redux';
import {isLoaded, useFirebase, useFirebaseConnect} from 'react-redux-firebase';
import {
    PRODUCTS_REF,
    FITNESS_CATEGORY_LINK, TENNIS_CATEGORY_LINK, OTHERS_CATEGORY_LINK
} from '../../utils/linkNames';

export default function AllCategories() {
    useFirebaseConnect(PRODUCTS_REF);

    const products = useSelector(state => state.firebase.data.products);

    const firebase = useFirebase();

    if (!isLoaded(products)) {
        return <div>Loading...</div>
    }

    const clearSearchValue = () => {
        const ref = firebase.ref(PRODUCTS_REF);
        ref.update({'searchValue': ''});
    };

    return (
        <div>
            <Link to={FITNESS_CATEGORY_LINK}><CategoryCard category='fitness'/></Link>
            <Link to={TENNIS_CATEGORY_LINK}><CategoryCard category='tenis'/></Link>
            <Link to={OTHERS_CATEGORY_LINK}><CategoryCard category='altele'/></Link>
            {clearSearchValue()}
        </div>
    )
}

