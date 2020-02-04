import React from 'react'
import '../../styles/Cart.css'
import '../../styles/ProductCard.css'

export default class ProductCard extends React.Component {
    render () {
        return (
            <div id="product-card" className="ui card">
                <div className="content">
                    <div className="four column stackable ui grid transition visible">
                        <div id="name-column" className='fluid column'>
                            <div>{this.props.product.name}</div>
                        </div>
                        <div id="quantity-column" className="fluid column">
                            <div  className="ui inverted fluid input"><input id="ID" type="number" value={this.props.product.quantity}/></div>
                        </div>
                        <div id="price-column" className="fluid column">
                            <div >{this.props.product.price}*{this.props.product.quantity} RON</div>
                        </div>
                        <div id="delete-column" className="fluid column">
                            <i id="delete-icon" className="trash alternate link icon"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
