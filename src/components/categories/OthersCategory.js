import ProductCard from "../ProductCard";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";
import React from "react";
import {useSelector} from "react-redux";

export default function OthersCategory() {
    // TODO: add to cart and add to favorites buttons

    const othersProducts = useSelector(state => state.firebase.data.products.others);

    const renderList = () => {
        return (
            <div>
                {othersProducts.map(product => (
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
