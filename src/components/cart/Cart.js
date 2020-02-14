import React from 'react'
import CartSummary from './CartSummary';
import CartDetails from './CartDetails';
import '../../styles/CategoryCard.css'
import {useSelector} from 'react-redux';
import {useFirebaseConnect} from 'react-redux-firebase';

export default function Cart() {
    useFirebaseConnect('products');

    const cartProducts = useSelector(state => state.firebase.data.products.cartProducts);

    const products = () => {
        if (cartProducts === undefined) {
            return [];
        }
        return Object.values(cartProducts);
    };

    return (
        <div className='outer'>
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
