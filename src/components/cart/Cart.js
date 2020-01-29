import React from 'react'
import TotalPrice from "./TotalPrice";
import OrderProducts from "./OrderProducts";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: [
                {id: 1, name: "Gantera 5 kg", price: 89.99, quantity: 2},
                {id: 2, name: "Banda de alergare", price: 134.99, quantity: 1},
                {id: 3, name: "Cort", price: 259.99, quantity: 1},
                {id: 4, name: "Banda elastica", price: 29.99, quantity: 3},
                {id: 5, name: "Casca de inot", price: 24.99, quantity: 1},
            ]}
    }

    render() {
        return (
            <div className="two column stackable ui grid">
                <div className="column">
                    <TotalPrice/>
                </div>
                <div className="column">
                    <OrderProducts products={this.state.products}/>
                </div>
            </div>
        )
    }
}

export default Cart;
