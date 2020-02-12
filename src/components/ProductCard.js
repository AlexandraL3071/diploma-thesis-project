import React, {useState} from 'react'
import {useFirebase} from "react-redux-firebase";
import '../styles/CategoryCard.css'
import {Link} from "react-router-dom";

export default function ProductCard(props) {
    // TODO: here we should have an add to cart button which writes the product to the firebase
    // to the products/cart path

    // TODO: here we should also have an add to favorites button which shoul write to
    //  firebase tot products/favorites path
   const [selectedQuantity, setSelectedQuantity] = useState(1);
    const firebase = useFirebase();

    const addToFirebaseCart = () => {
        const ref = firebase.push();
        props.product.quantity = selectedQuantity;
        const productInCart = {product: {...props.product, key: ref.key}};
        return firebase.push('products/cartProducts', productInCart);
    };

    const handleChangeQuantity = (event) => {
        setSelectedQuantity(event.target.value);
    };

    return (
        <div className="ui inverted card">
            <div className="image">
                <img src={props.product.image} alt="Nothing"/>
            </div>
            <div className="content">
                <div className="header">{props.product.name}</div>
                <div className="description">
                    <div className="two column stackable ui grid">
                        <div id="first-column" className="column">
                            {props.product.price} RON
                        </div>
                        <div id="second-column" className="column">
                            <div>Cantitatea:</div>
                            <div className="ui inverted fluid input">
                                <input id="quantity" name="quantity" type="number" min="1" value={selectedQuantity} onChange={handleChangeQuantity}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <Link to="/categorii/adaugare-cos"><div className="ui basic blue button" onClick={addToFirebaseCart}><i className="add to cart icon"/>Adauga
                        in cos</div></Link>
                    <div className="ui basic pink button"><i className="heart icon"/>Adauga
                        la favorite
                    </div>
                </div>
            </div>
        </div>
    )
}

