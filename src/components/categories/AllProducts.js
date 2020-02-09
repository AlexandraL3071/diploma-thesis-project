import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProductCard from "../ProductCard";
import {connect} from "react-redux";
import {fetchAllProductsAction} from "../../actions/fetchAllProductsAction";

export class AllProducts extends React.Component {
    componentDidMount() {
        let firebaseRef = this.props.firebase.database.ref("products/fitness");
        let partialProducts = [];
        firebaseRef.once('value').then(snapshot => {
            partialProducts = partialProducts.concat(snapshot.val());
        });

        firebaseRef = this.props.firebase.database.ref("products/tennis");
        firebaseRef.once('value').then(snapshot => {
            partialProducts = partialProducts.concat(snapshot.val());
        });

        firebaseRef = this.props.firebase.database.ref("products/others");
        firebaseRef.once('value').then(snapshot => {
            partialProducts = partialProducts.concat(snapshot.val());
            this.props.fetchAllProductsAction(partialProducts);
        })

    }

    renderProductsList = () => {
        return (
            this.props.products.map(product => (
                <ProductCard product={product}/>
            ))
        )
    };

    render() {
        return (
            <div>
                {this.renderProductsList()}
                <Link to="cos-cumparaturi"><Button inverted>Vizualizati cosul de cumparaturi</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        products: state.products
});

export default connect(
    mapStateToProps,
    {fetchAllProductsAction})
(AllProducts)
