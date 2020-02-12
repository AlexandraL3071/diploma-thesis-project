import React, {useState} from 'react'
import {useFirebase} from "react-redux-firebase";
import '../styles/CategoryCard.css'
import {Link} from "react-router-dom";

export default function ProductCard(props) {
   const [selectedQuantity, setSelectedQuantity] = useState(1);
   const firebase = useFirebase();

    const addToFirebaseCart = () => {
        props.product.quantity = selectedQuantity;
        const cartRef = firebase.push('products/cartProducts', props.product);
        props.product.cartKey = cartRef.key;
        const ref = firebase.ref('products/cartProducts/' + cartRef.key);
        ref.update({'cartKey': cartRef.key});
    };

    const addToFirebaseFavorites = () => {
        const favoriteRef = firebase.push('products/favoriteProducts',props.product);
        props.product.favoriteKey = favoriteRef.key;
        const ref = firebase.ref('products/favoriteProducts/' + favoriteRef.key);
        ref.update({'favoriteKey': favoriteRef.key});
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
                                <input id="quantity" name="quantity" type="number" min="1" max={props.product.quantity} value={selectedQuantity} onChange={handleChangeQuantity}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <Link to="/categorii/adaugare-cos"><div className="ui basic blue button" onClick={addToFirebaseCart}><i className="add to cart icon"/>Adauga
                        in cos</div></Link>
                    <Link to="/categorii/adaugare-favorite"><div className="ui basic pink button" onClick={addToFirebaseFavorites}><i className="heart icon"/>Adauga
                        la favorite</div></Link>
                </div>
            </div>
        </div>
    )
}

