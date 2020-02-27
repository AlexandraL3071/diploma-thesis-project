import React from 'react'
import '../../styles/ProductCard.css'
import { CART_PRODUCTS_REF, FAVORITE_PRODUCTS_REF} from "../../utils/linkNames";
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCol,
    IonGrid,
    IonHeader, IonIcon,
    IonRow
} from "@ionic/react";
import {cartOutline} from 'ionicons/icons'
import {useFirebase} from "react-redux-firebase";

export default function ProductCard(props) {
    const firebase = useFirebase();

    const addToFirebaseCart = () => {
        const cartRef = firebase.push(CART_PRODUCTS_REF, props.product);
        props.product.cartKey = cartRef.key;
        const ref = firebase.ref(CART_PRODUCTS_REF + cartRef.key);
        ref.update({'cartKey': cartRef.key});
        document.documentElement.scrollTop = 0;
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
        document.documentElement.scrollTop = 0;
    };
    return (
        <IonCard>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <img id='product-image' src={props.product.image} alt='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTZjizRLdaRI0IgiqG_7F2SmM7kkA7WDb4vgssWmhozCUFwEnH'/>
                        </IonCol>
                        <IonCol>
                            <IonRow>
                                <IonHeader>Denumire:<br/>{props.product.name}</IonHeader>
                            </IonRow>
                            <IonRow>
                                <IonCol>Preț: {props.product.price} RON</IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow>
                        <IonButton color='dark' size='small' onClick={addToFirebaseCart}>
                            <IonIcon slot='start' icon={cartOutline}/>
                            Adaugă în coș
                        </IonButton>
                        <IonButton color='dark' size='small' onClick={handleFavoriteProduct}>
                            <IonIcon slot='start' icon={props.icon}/>
                            {props.text}
                        </IonButton>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    )
   // const [selectedQuantity, setSelectedQuantity] = useState(1);
   // const firebase = useFirebase();
   //
   //  const addToFirebaseCart = () => {
   //      props.product.quantity = selectedQuantity;
   //      const cartRef = firebase.push(CART_PRODUCTS_REF, props.product);
   //      props.product.cartKey = cartRef.key;
   //      const ref = firebase.ref(CART_PRODUCTS_REF + cartRef.key);
   //      ref.update({'cartKey': cartRef.key});
   //      document.documentElement.scrollTop = 0;
   //  };
   //
   //  const addToFavorites = () => {
   //      const favoriteRef = firebase.push(FAVORITE_PRODUCTS_REF, props.product);
   //      props.product.favoriteKey = favoriteRef.key;
   //      const ref = firebase.ref(FAVORITE_PRODUCTS_REF + favoriteRef.key);
   //      ref.update({'favoriteKey': favoriteRef.key});
   //  };
   //
   //  const removeFromFavorites = () => {
   //      return firebase.ref(FAVORITE_PRODUCTS_REF).child(props.product.favoriteKey).remove();
   //  };
   //
   //  const handleFavoriteProduct = () => {
   //      if (props.type === 'add') {
   //          addToFavorites();
   //          document.documentElement.scrollTop = 0;
   //      } else {
   //          removeFromFavorites();
   //      }
   //  };
   //
   //  const handleChangeQuantity = (event) => {
   //      setSelectedQuantity(event.target.value);
   //  };
   //
   //  return (
   //      <div id='product-card' className='ui card'>
   //          <div className='image'>
   //              <img id='product-image' src={props.product.image} alt='Nothing'/>
   //          </div>
   //          <div id='product-content' className='content'>
   //              <div className='header'>{props.product.name}</div>
   //              <div className='description'>
   //                  <div className='two column stackable ui grid'>
   //                      <div id='first-column' className='column'>
   //                          {props.product.price} RON
   //                      </div>
   //                      <div id='second-column' className='column'>
   //                          <div>Cantitatea:</div>
   //                          <div className='ui inverted fluid input'>
   //                              <input id='quantity' name='quantity' type='number' min='1' max={props.product.quantity} value={selectedQuantity} onChange={handleChangeQuantity}/>
   //                          </div>
   //                      </div>
   //                  </div>
   //              </div>
   //          </div>
   //          <div id='product-extra-content' className='extra content'>
   //              <div className='ui two buttons'>
   //                  <Link to={ADD_CART_LINK}><div className='ui basic blue button' onClick={addToFirebaseCart}><i className='add to cart icon'/>Adauga
   //                      in cos</div></Link>
   //                  <Link to={props.link}><div className={props.button} onClick={handleFavoriteProduct}><i className={props.icon}/>{props.text}</div></Link>
   //              </div>
   //          </div>
   //      </div>
   //  )
}

