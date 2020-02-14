import React from 'react'
import {Link} from 'react-router-dom';
import Modal from './Modal';
import '../styles/Modal.css'
import {CART_LINK, CATEGORIES_LINK} from "../utils/linkNames";

export default function AddToCart() {
    const actions = () => {
        return (
            <React.Fragment>
                <Link to={CATEGORIES_LINK} className='ui secondary button' id='ok'>OK</Link>
                <Link to={CART_LINK} className='ui secondary button'>Vizualizati cosul de cumparaturi</Link>
            </React.Fragment>
        )
    };

    const renderContent = () => {
        return 'Produsul a fost adaugat in cos!';
    };

    return (
        <Modal
            title='Produs adaugat'
            content={renderContent()}
            actions={actions()}
        />
    )
}
