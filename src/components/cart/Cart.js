import React from 'react'
import CartSummary from "./CartSummary";
import CartDetails from "./CartDetails";
import '../../styles/Card.css'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {id: 1, name: "Gantera 5 kg", price: 89.99, quantity: 2},
                {id: 2, name: "Banda de alergare", price: 134.99, quantity: 1},
                {id: 3, name: "Cort", price: 259.99, quantity: 1},
                {id: 4, name: "Banda elastica", price: 29.99, quantity: 3},
                {id: 5, name: "Casca de inot", price: 24.99, quantity: 1},
            ]
        }
    }

    render() {
        return (
            <div className="outer">
                <div className="two column stackable ui grid transition visible">
                    <div id="smaller-column" className="column">
                        <CartSummary/>
                    </div>
                    <div id="larger-column" className="column">
                        <CartDetails products={this.state.products}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;
