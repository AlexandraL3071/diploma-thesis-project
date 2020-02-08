import React from 'react'
import '../styles/CategoryCard.css'

export default class ProductCard extends React.Component {
    imageName = () => {
        return "../images/" + this.state.category + ".jpg";
    };

    render() {
        return (
            <div className="ui inverted card">
                <div className="image" >
                    <img src={this.imageName} alt="Nothing"/>
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

