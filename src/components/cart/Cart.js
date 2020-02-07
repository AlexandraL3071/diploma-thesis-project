import React from 'react'
import CartSummary from "./CartSummary";
import CartDetails from "./CartDetails";
import '../../styles/CategoryCard.css'

export default class Cart extends React.Component {
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
