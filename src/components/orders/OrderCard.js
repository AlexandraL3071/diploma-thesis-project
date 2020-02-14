import React from 'react'
import {useFirebase} from 'react-redux-firebase';
import {canBeCancelled} from '../../utils/Utils';
import {ORDERS_REF} from "../../utils/linkNames";

export default function OrderCard(props) {
    const firebase = useFirebase();

    const totalNumberOfProducts = () => {
        let totalNumberOfProducts = 0;
        Object.values(props.order).map(product => {
            if (product.quantity !==  undefined) {
                totalNumberOfProducts += parseInt(product.quantity)
            }
        });
        return totalNumberOfProducts
    };

    const totalPrice = () => {
        let totalPrice = 0;
        Object.values(props.order).map(product => {
            if (product.quantity !== undefined && product.price !== undefined) {
                totalPrice += parseInt(product.price) * parseInt(product.quantity)
            }
        });
        return totalPrice
    };

    const orderDate = () => {
        const date = props.order.orderDate.split('T')[0];
        const auxDate = date.split('-');
        return auxDate[2] + '.' + auxDate[1] + '.' + auxDate[0];
    };

    const cancelOrder = () => {
        return firebase.ref(ORDERS_REF).child(props.order.orderKey).remove();
    };

    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header'>Comanda nr {props.orderNumber}</div>
            </div>
            <div className='content'>
                <h4 className='ui sub header'>Detaliile comenzii</h4>
            </div>
            <div className='event'>
                <div className='content'>
                    <div className='summary'>
                        <div className='description'>
                            <div style={{marginLeft: '10px', color: 'black'}}>
                                Ati comandat un numar de: {totalNumberOfProducts()} {totalNumberOfProducts() === 1 ? 'produs' : 'produse'}
                            </div>
                            <br/>
                            <div style={{marginLeft: '10px', color: 'black'}}>
                                Valoarea totala a comenzii: {totalPrice()} RON
                            </div>
                            <br/>
                            <div style={{marginLeft: '10px', color: 'black'}}>
                                Data plasarii comenzii: {orderDate()}
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            {
                canBeCancelled(props.order.orderDate) === true ? <div className='ui bottom attached button' onClick={cancelOrder}>
                    <i className='trash alternate outline icon'/>
                    Anuleaza comanda
                </div> : <div/>
            }
        </div>
    )
}
