import React from 'react'
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import ProductCard from '../ProductCard';
import {useSelector} from 'react-redux';
import {ADD_FAVORITE_LINK, CATEGORIES_LINK} from "../../utils/linkNames";

export default function FitnessCategory() {
    const fitnessProducts = useSelector(state => state.firebase.data.products.fitness);

    const renderList = () => {
        return (
            <div>
                {fitnessProducts.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon' text='Adauga la favorite' link={ADD_FAVORITE_LINK}/>
                ))}
            </div>
        )
    };

    return (
        <div>
            {renderList()}
            <Link to={CATEGORIES_LINK}><Button>Inapoi</Button></Link>
        </div>
    )
}
