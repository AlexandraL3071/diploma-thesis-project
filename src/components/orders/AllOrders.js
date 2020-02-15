import React from 'react';
import {useSelector} from 'react-redux';
import {useFirebaseConnect} from 'react-redux-firebase';
import OrderCard from './OrderCard';
import {PRODUCTS_REF} from "../../utils/linkNames";
import '../../styles/Content.css'

export default function AllOrders() {
    let orderNumber = 1;
    useFirebaseConnect(PRODUCTS_REF);

    const orders = useSelector(state => state.firebase.data.products.orders);

    const renderAllOrders = () => {
        return (
            <div id='container'>
                {
                    Object.values(orders).map(order => (
                        <OrderCard order={order} orderNumber={orderNumber++}/>
                    ))
                }
            </div>
        )
    };

    return (
        orders === undefined ? <div className='ui hearder'>Nu a fost plasata nicio comanda</div> : renderAllOrders()
    )
}
