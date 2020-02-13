import React from 'react'
import '../../styles/Cart.css'
import CartProductCard from "./CartProductCard";

export default function CartProducts(props) {

    return (
        props.products.length > 0 ? props.products.map(product => (
            <CartProductCard product={product}/>
        )) : <div/>
    )
}
