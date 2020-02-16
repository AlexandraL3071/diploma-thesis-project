import React from 'react'
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';
import {ADD_FAVORITE_LINK, CATEGORIES_LINK} from "../../utils/linkNames";
import '../../styles/AllProducts.css'
import '../../styles/Content.css'

export default function TennisCategory() {
    const tennisProducts = useSelector(state => state.firebase.data.products.tennis);

    const renderList = () => {
        return (
            <div id='container'>
                {tennisProducts.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon' text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
            </div>
        )
    };

    const scroll = () => {
        document.documentElement.scrollTop = 0;
    };

    return (
        <div>
            {renderList()}
            <Link to={CATEGORIES_LINK}><Button id='button' inverted onClick={scroll}>Inapoi</Button></Link>
        </div>
    )
}
