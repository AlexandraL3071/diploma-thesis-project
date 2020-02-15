import React from 'react'
import CartSummary from './CartSummary';
import CartDetails from './CartDetails';
import '../../styles/Cart.css'
import {useSelector} from 'react-redux';
import {useFirebaseConnect} from 'react-redux-firebase';
import {PRODUCTS_REF} from "../../utils/linkNames";

export default function Cart() {
    useFirebaseConnect(PRODUCTS_REF);

    const cartProducts = useSelector(state => state.firebase.data.products.cartProducts);

    const products = () => {
        if (cartProducts === undefined) {
            return [];
        }
        return Object.values(cartProducts);
    };

    return (
        <div id='cart'>
            <div className='two column stackable ui grid transition visible'>
                <div id='smaller-column' className='column'>
                    <CartSummary products={products()}/>
                </div>
                <div id='larger-column' className='column'>
                    <CartDetails products={products()}/>
                </div>
            </div>
        </div>
    )
}
