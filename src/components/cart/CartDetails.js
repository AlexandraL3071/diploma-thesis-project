import React from 'react'
import CartProducts from './CartProducts';
import {Link} from 'react-router-dom';
import '../../styles/CartDetails.css'
import {useFirebase} from 'react-redux-firebase';
import {CART_PRODUCTS_REF, CATEGORIES_LINK, ORDERS_REF, PLACE_ORDER_LINK} from "../../utils/linkNames";

export default function CartDetails(props) {
    const firebase = useFirebase();

    const addToFirebaseOrders = () => {
        const orderDate = new Date();
        const orderRef = firebase.push(ORDERS_REF, props.products);
        props.products.orderRef = orderRef;
        props.products.orderDate = orderDate;
        const ref = firebase.ref(ORDERS_REF + orderRef.key);
        ref.update({'orderKey': orderRef.key, 'orderDate': orderDate});
        firebase.ref(CART_PRODUCTS_REF).remove();
    };

    return (
        <div className='ui fluid card'>
            <div className='content'>
                <div className='header'>Produsele tale</div>
            </div>
            <div className='content'>
                <h4 className='ui sub header'>Pana acum ai adaugat produsele:</h4>
                <div className='ui divider transition visible'/>
            </div>
            <div className='event'>
                <div className='content'>
                    <div className='summary'>
                        <div className='description'>
                            <CartProducts products={props.products}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <Link to={PLACE_ORDER_LINK}><button className='ui secondary button' onClick={addToFirebaseOrders}>Plaseaza comanda</button></Link>
            </div>
            <div className='extra content'>
                Doriti sa vedeti si alte categorii de produse? Click <Link to={CATEGORIES_LINK}><u>aici</u></Link>
            </div>
        </div>
    )
}
