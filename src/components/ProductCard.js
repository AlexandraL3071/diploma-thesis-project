import React from 'react'
import '../styles/CategoryCard.css'

export default class ProductCard extends React.Component {
    constructor(props) {
        super(props);
    }

    imageName = () => {
        return "../images/" + this.state.category + ".jpg";
    }

    render() {
        return (
            <div className="ui inverted card">
                <div className="image" >
                    <img src={this.imageName} alt="Nothing"/>
                </div>
                <div className="content">
                    <a className="header">{this.props.product.name}</a>
                    <div className="description">
                        {this.props.product.price} RON
                    </div>
                </div>
            </div>
        )
    }
}

