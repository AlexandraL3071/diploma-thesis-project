import React from 'react'
import '../../styles/Cart.css'
import ProductCard from "./ProductCard";

export default class CartProducts extends React.Component {
    render() {
        return (
            this.props.products.map(product => (
                <ProductCard product={product}/>
            ))
        )
    }
}
