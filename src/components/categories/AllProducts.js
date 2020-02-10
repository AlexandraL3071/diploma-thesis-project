import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProductCard from "../ProductCard";
import {useSelector} from "react-redux";
import {isLoaded, isEmpty} from "react-redux-firebase";

export default function AllProducts() {
    const products = useSelector(state => state.firebase.data.products);

    if (!isLoaded(products)) {
        return <div>Loading...</div>
    }

    if (isEmpty(products)) {
        return <div>Products List Is Empty</div>
    }

    const renderProductsList = () => {
        return (
            <div>
                {products.fitness.map(product => (
                    <ProductCard product={product}/>
                ))}
                {products.tennis.map(product => (
                    <ProductCard product={product}/>
                ))}
                {products.others.map(product => (
                    <ProductCard product={product}/>
                ))}
            </div>
        )
    };

    return (
        <div>
            {renderProductsList()}
            <Link to="cos-cumparaturi"><Button inverted>Vizualizati cosul de cumparaturi</Button></Link>
        </div>
    )
}
