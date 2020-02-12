import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProductCard from "../ProductCard";
import {useSelector} from "react-redux";

export default function FitnessCategory() {
    // TODO: add to cart and add to favorites buttons
    const fitnessProducts = useSelector(state => state.firebase.data.products.fitness);

    const renderList = () => {
        return (
            <div>
                {fitnessProducts.map(product => (
                    <ProductCard product={product}/>
                ))}
            </div>
        )
    };

    return (
        <div>
            {renderList()}
            <Link to="/categorii"><Button>Inapoi</Button></Link>
        </div>
    )
}
