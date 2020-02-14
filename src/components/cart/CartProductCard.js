import React from 'react'
import '../../styles/Cart.css'
import '../../styles/ProductCard.css'
import {useFirebase} from 'react-redux-firebase';
import {CART_PRODUCTS_REF} from "../../utils/linkNames";

export default function CartProductCard(props) {
    const firebase = useFirebase();

    const deleteFromCart = () => {
        return firebase.ref(CART_PRODUCTS_REF).child(props.product.cartKey).remove();
    };

    const price = () => {
        return props.product.price*props.product.quantity;
    };

    const handleChangeQuantity = (event) => {
        const ref = firebase.ref(CART_PRODUCTS_REF + props.product.cartKey);
        ref.update({'quantity': event.target.value});
    };

    return (
        <div id='product-card' className='ui card'>
            <div className='content'>
                <div className='four column stackable ui grid transition visible'>
                    <div id='name-column' className='fluid column'>
                        <div>{props.product.name}</div>
                    </div>
                    <div id='quantity-column' className='fluid column'>
                        <div className='ui inverted fluid input'><input id='quantity' type='number' min='1'
                                                                        value={props.product.quantity} onChange={handleChangeQuantity}/></div>
                    </div>
                    <div id='price-column' className='fluid column'>
                        <div>{price()} RON</div>
                    </div>
                    <div id='delete-column' className='fluid column'>
                        <i id='delete-icon' className='trash alternate link icon' onClick={deleteFromCart}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
