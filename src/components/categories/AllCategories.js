import React from 'react'
import Card from "../Card";
import {Link} from "react-router-dom";
import  { FirebaseContext } from '../Firebase';

class AllCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
        this.getProductsFromFirebase();
    }

    getProductsFromFirebase = () => {
        return (
        <FirebaseContext.Consumer>
            {firebase => {
                const firebaseRef = firebase.database().ref("products");
                firebaseRef.on("value", data => {
                    this.setState({products: data.val()})
                })
            }}
        </FirebaseContext.Consumer>
        )
    }

    render() {
        return (
            <div>
                <Link to="/categorii/culturism"><Card category="culturism"/></Link>
                <Link to="/categorii/atletism"><Card category="atletism"/></Link>
                <Link to="/categorii/inot"><Card category="inot"/></Link>
            </div>
        )
    }
}

export default AllCategories;
