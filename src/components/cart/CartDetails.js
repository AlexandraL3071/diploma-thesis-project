import React from 'react'
import CartProducts from "./CartProducts";
import {Link} from "react-router-dom";
import '../../styles/CartDetails.css'

export default function CartDetails(props) {
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
                <button className="ui secondary button">Plaseaza comanda</button>
            </div>
            <div className="extra content">
                Doriti sa vedeti si alte categorii de produse? Click <Link to="/categorii"><u>aici</u></Link>
            </div>
        </div>
    )
}
