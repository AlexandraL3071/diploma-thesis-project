import React from 'react'
import {Link} from 'react-router-dom';
import {PRODUCTS_LINK} from "../../utils/linkNames";
import {totalNumberOfProducts, totalPrice} from "../../utils/Utils";

export default function CartSummary(props) {
    return (
        <div id='cart-summary' className='ui fluid card'>
            <div className='content'>
                <div className='header'>Detalii cos</div>
            </div>
            <div className='content'>
                <h4 className='ui sub header'>Sumar</h4>
            </div>
            <div className='event'>
                <div className='content'>
                    <div className='summary'>
                        <div className='description'>
                            <div style={{marginLeft: '10px', color: 'black'}}>
                                Pana acum aveti: {totalNumberOfProducts(props.products)} {totalNumberOfProducts(props.products) > 1 ? 'produse' : 'produs'}
                            </div>
                            <br/>
                            <div style={{marginLeft: '10px', color: 'black'}}>
                                Pret total: {totalPrice(props.products)} RON
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={PRODUCTS_LINK}>
                <div className='ui bottom attached button'>
                    <i className='add icon'/>
                    Continua cumparaturile
                </div>
            </Link>
        </div>
    )
}

