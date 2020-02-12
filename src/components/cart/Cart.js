import React from 'react'
import CartSummary from "./CartSummary";
import CartDetails from "./CartDetails";
import '../../styles/CategoryCard.css'

export default class Cart extends React.Component {
    // TODO: there should be a button on each product from cart which removes it from
    // the cart and from firebase as well

    // TODO: the number of items of a particular product should be modifiable

    // TODO: pass some info about cart products to CartSummary component to
    // be displayed inside of it

    // TODO: add functionality (a button) to place an order to firebase to orders or
    // products/order

    constructor(props) {
        super(props);
        this.state = {products: []}
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
