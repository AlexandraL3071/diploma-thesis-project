import React from 'react'
import {Link} from 'react-router-dom';

export default function CartSummary(props) {
    const totalNumberOfProducts = () => {
        let totalNumberOfProducts = 0;
        props.products.map(product => {
            totalNumberOfProducts += parseInt(product.quantity)
        });
        return totalNumberOfProducts
    };

    const totalPrice = () => {
        let totalPrice = 0;
        props.products.map(product => {
            totalPrice += parseInt(product.price)*parseInt(product.quantity)
        });
        return totalPrice
    };

    return (
        <div className='ui fluid card'>
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
                                Pana acum aveti: {totalNumberOfProducts()} produse
                            </div>
                            <br/>
                            <div style={{marginLeft: '10px', color: 'black'}}>
                                Pret total: {totalPrice()} RON
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/produse'>
                <div className='ui bottom attached button'>
                    <i className='add icon'/>
                    Continua cumparaturile
                </div>
            </Link>
        </div>
    )
}

