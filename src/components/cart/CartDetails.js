import React from 'react'
import CartProducts from "./CartProducts";
import {Link} from "react-router-dom";
import '../../styles/CartDetails.css'
import {useFirebase} from "react-redux-firebase";

export default function CartDetails(props) {
    const firebase = useFirebase();

    const addToFirebaseOrders = () => {
        const orderRef = firebase.push('products/orders', props.products);
        props.products.orderRef = orderRef;
        const ref = firebase.ref('products/orders/' + orderRef.key);
        ref.update({'orderKey': orderRef.key});
        firebase.ref('products/cartProducts').remove();
    };

    return (
        <div className="ui fluid card">
            <div className="content">
                <div className="header">Produsele tale</div>
            </div>
            <div className="content">
                <h4 className="ui sub header">Pana acum ai adaugat produsele:</h4>
                <div className="ui divider transition visible"/>
            </div>
            <div className="event">
                <div className="content">
                    <div className="summary">
                        <div className="description">
                            <CartProducts products={props.products}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <Link to="/categorii/plaseaza-comanda"><button className="ui secondary button" onClick={addToFirebaseOrders}>Plaseaza comanda</button></Link>
            </div>
            <div className="extra content">
                Doriti sa vedeti si alte categorii de produse? Click <Link to="/categorii"><u>aici</u></Link>
            </div>
        </div>
    )
}
