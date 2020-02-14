import React, {useState} from 'react'
import {useFirebase} from 'react-redux-firebase';
import '../../styles/CategoryCard.css'
import {Link} from 'react-router-dom';
import {ADD_CART_LINK, CART_PRODUCTS_REF, FAVORITE_PRODUCTS_REF} from "../../utils/linkNames";

export default function ProductCard(props) {
   const [selectedQuantity, setSelectedQuantity] = useState(1);
   const firebase = useFirebase();

    const addToFirebaseCart = () => {
        props.product.quantity = selectedQuantity;
        const cartRef = firebase.push(CART_PRODUCTS_REF, props.product);
        props.product.cartKey = cartRef.key;
        const ref = firebase.ref(CART_PRODUCTS_REF + cartRef.key);
        ref.update({'cartKey': cartRef.key});
    };

    const addToFavorites = () => {
        const favoriteRef = firebase.push(FAVORITE_PRODUCTS_REF, props.product);
        props.product.favoriteKey = favoriteRef.key;
        const ref = firebase.ref(FAVORITE_PRODUCTS_REF + favoriteRef.key);
        ref.update({'favoriteKey': favoriteRef.key});
    };

    const removeFromFavorites = () => {
        return firebase.ref(FAVORITE_PRODUCTS_REF).child(props.product.favoriteKey).remove();
    };

    const handleFavoriteProduct = () => {
        if (props.type === 'add') {
            addToFavorites();
        } else {
            removeFromFavorites();
        }
    };

    const handleChangeQuantity = (event) => {
        setSelectedQuantity(event.target.value);
    };

    return (
        <div className='ui inverted card'>
            <div className='image'>
                <img src={props.product.image} alt='Nothing'/>
            </div>
            <div className='content'>
                <div className='header'>{props.product.name}</div>
                <div className='description'>
                    <div className='two column stackable ui grid'>
                        <div id='first-column' className='column'>
                            {props.product.price} RON
                        </div>
                        <div id='second-column' className='column'>
                            <div>Cantitatea:</div>
                            <div className='ui inverted fluid input'>
                                <input id='quantity' name='quantity' type='number' min='1' max={props.product.quantity} value={selectedQuantity} onChange={handleChangeQuantity}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='extra content'>
                <div className='ui two buttons'>
                    <Link to={ADD_CART_LINK}><div className='ui basic blue button' onClick={addToFirebaseCart}><i className='add to cart icon'/>Adauga
                        in cos</div></Link>
                    <Link to={props.link}><div className={props.button} onClick={handleFavoriteProduct}><i className={props.icon}/>{props.text}</div></Link>
                </div>
            </div>
        </div>
    )
}

