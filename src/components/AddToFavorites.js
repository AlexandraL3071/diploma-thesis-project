import React from 'react'
import {Link} from 'react-router-dom';
import Modal from './Modal';
import '../styles/Modal.css'
import {CATEGORIES_LINK, FAVORITE_LINK} from "../utils/linkNames";

export default function AddToFavorites() {
    const actions = () => {
        return (
            <React.Fragment>
                <Link to={CATEGORIES_LINK} className='ui secondary button' id='ok'>OK</Link>
                <Link to={FAVORITE_LINK} className='ui secondary button'>Vizualizati produsele favorite</Link>
            </React.Fragment>
        )
    };

    const renderContent = () => {
        return 'Ati marcat produsul ca fiind favorit!';
    };

    return (
        <Modal
            title='Produs favorit'
            content={renderContent()}
            actions={actions()}
        />
    )
}
