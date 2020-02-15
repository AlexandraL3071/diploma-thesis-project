import React from 'react'
import {Link} from 'react-router-dom';
import {CategoryCard} from './CategoryCard';
import {useSelector} from 'react-redux';
import {isLoaded} from 'react-redux-firebase';
import {
    FITNESS_CATEGORY_LINK, TENNIS_CATEGORY_LINK, OTHERS_CATEGORY_LINK
} from '../../utils/linkNames';
import '../../styles/Content.css'

export default function AllCategories() {
    const products = useSelector(state => state.firebase.data.products);

    if (!isLoaded(products)) {
        return <div>Loading...</div>
    }

    return (
        <div id='container'>
            <Link to={FITNESS_CATEGORY_LINK}><CategoryCard category='fitness'/></Link>
            <Link to={TENNIS_CATEGORY_LINK}><CategoryCard category='tennis'/></Link>
            <Link to={OTHERS_CATEGORY_LINK}><CategoryCard category='others'/></Link>
        </div>
    )
}

