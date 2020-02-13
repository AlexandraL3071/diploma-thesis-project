import React from 'react';
import {useSelector} from "react-redux";
import {useFirebaseConnect} from "react-redux-firebase";
import OrderCard from "./OrderCard";

export default function AllOrders(props) {
    let orderNumber = 1;
    useFirebaseConnect('products');

    const orders = useSelector(state => state.firebase.data.products.orders);

    const renderAllOrders = () => {
        return (
            <div>
                {
                    Object.values(orders).map(order => (
                        <OrderCard order={order} orderNumber={orderNumber++}/>
                    ))
                }
            </div>
        )
    };

    return (
        orders === undefined ? <div className="ui hearder">Nu a fost plasata nicio comanda</div> : renderAllOrders()
    )
}
