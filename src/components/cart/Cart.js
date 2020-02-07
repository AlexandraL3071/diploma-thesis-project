import React from 'react'
import CartSummary from "./CartSummary";
import CartDetails from "./CartDetails";
import '../../styles/Card.css'
import {FirebaseContext} from "../Firebase";
import 'firebase/database'
import {connect} from "react-redux";
import {fetchAllProductsAction} from "../../actions/fetchAllProductsAction";
import {ProductsRetriever} from "../Firebase/ProductsRetriever";

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: []}
    }

    render() {
        return (
            <div>
                <FirebaseContext.Consumer>
                    {firebase => {
                        const firebaseRef = firebase.database.ref("products");
                        firebaseRef.once('value').then(snapshot => {
                            // this.props.fetchAllProductsAction(snapshot.val());
                             this.setState({products: snapshot.val()})
                        })
                    }}
                </FirebaseContext.Consumer>
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
            </div>
        )
    }
}
//
// const mapStateToProps = (state) => {
//     return {
//         products: state.products
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     {fetchAllProductsAction})
// (Cart)
