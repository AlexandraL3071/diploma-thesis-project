import React from 'react'
import {Link} from 'react-router-dom';
import Modal from './Modal';
import '../styles/Modal.css'
import {CART_LINK, PRODUCTS_LINK} from "../utils/linkNames";

export default function PlaceOrder() {
    const actions = () => {
        return (
            <React.Fragment>
                <Link to={PRODUCTS_LINK} className='ui secondary button' id='ok'>Vezi si alte produse</Link>
                <Link to={CART_LINK} className='ui secondary button'>Inapoi la cosul de cumparaturi</Link>
            </React.Fragment>
        )
    };

    const renderContent = () => {
        return 'Comanda a fost plasata!';
    };

    return (
        <Modal
            title='Comanda plasata'
            content={renderContent()}
            actions={actions()}
        />
    )
}
