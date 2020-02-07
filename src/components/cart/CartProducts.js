import React from 'react'
import '../../styles/Cart.css'
import CartProductCard from "./CartProductCard";

export default class CartProducts extends React.Component {
    render() {
        return (
            this.props.products.map(product => (
                <CartProductCard product={product}/>
            ))
        )
    }
}
