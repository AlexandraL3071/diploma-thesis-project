import React from 'react'
import {useFirebase} from 'react-redux-firebase';
import {canBeCancelled, orderDate, totalNumberOfProducts, totalPrice} from '../../utils/Utils';
import {ORDERS_REF} from "../../utils/linkNames";

export default function OrderCard(props) {
    const firebase = useFirebase();

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
                                Ati comandat un numar de: {totalNumberOfProducts(Object.values(props.order))} {totalNumberOfProducts(Object.values(props.order)) === 1 ? 'produs' : 'produse'}
                            </div>
                            <br/>
                            <div style={{marginLeft: '10px', color: 'black'}}>
                                Valoarea totala a comenzii: {totalPrice(Object.values(props.order))} RON
                            </div>
                            <br/>
                            <div style={{marginLeft: '10px', color: 'black'}}>
                                Data plasarii comenzii: {orderDate(props.order.orderDate)}
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
