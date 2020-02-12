import React from 'react'
import '../styles/CategoryCard.css'

export default class ProductCard extends React.Component {
    // TODO: here we should have an add to cart button which writes the product to the firebase
    // to the products/cart path

    // TODO: here we should also have an add to favorites button which shoul write to
    //  firebase tot products/favorites path
    imageName = () => {
        return "../images/" + this.state.category + ".jpg";
    };

    render() {
        return (
            <div className="ui inverted card">
                <div className="image" >
                    <img src={this.props.product.image} alt="Nothing"/>
                </div>
                <div className="content">
                    <div className="header">{this.props.product.name}</div>
                    <div className="description">
                        {this.props.product.price} RON
                    </div>
                </div>
            </div>
        )
    }
}

