import React from 'react'
import {Link} from 'react-router-dom';
import Modal from './Modal';
import '../styles/Modal.css'

export default function ConfirmationModal(props) {
    const actions = () => {
        return (
            <React.Fragment>
                <Link to={props.okLink} className='ui secondary button' id='ok'>{props.okText}</Link>
                <Link to={props.goLink} className='ui secondary button'>{props.buttonText}</Link>
            </React.Fragment>
        )
    };

    const renderContent = () => {
        return props.content;
    };

    return (
        <Modal
            title={props.title}
            content={renderContent()}
            actions={actions()}
        />
    )
}
