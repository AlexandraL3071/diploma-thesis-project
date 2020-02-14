import React from 'react'
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import ProductCard from '../ProductCard';
import {useSelector} from 'react-redux';

export default function TennisCategory() {
    const tennisProducts = useSelector(state => state.firebase.data.products.tennis);

    const renderList = () => {
        return (
            <div>
                {tennisProducts.map(product => (
                    <ProductCard product={product} type='add' button='ui basic pink button' icon='heart icon' text='Adauga la favorite' link='/categorii/adaugare-favorite'/>
                ))}
            </div>
        )
    };

    return (
        <div>
            {renderList()}
            <Link to='/categorii'><Button>Inapoi</Button></Link>
        </div>
    )
}
