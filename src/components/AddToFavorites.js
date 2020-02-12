import React from 'react'
import {Link} from "react-router-dom";
import Modal from "./Modal";
import '../styles/Modal.css'

export default function AddToFavorites() {
    const actions = () => {
        return (
            <React.Fragment>
                <Link to="/categorii" className="ui button" id="ok">OK</Link>
                <Link to="/favorite" className="ui button">Vizualizati produsele favorite</Link>
            </React.Fragment>
        )
    };

    const renderContent = () => {
        return 'Ati marcat produsul ca fiind favorit!';
    };

    return (
        <Modal
            title="Produs favorit"
            content={renderContent()}
            actions={actions()}
        />
    )
}
