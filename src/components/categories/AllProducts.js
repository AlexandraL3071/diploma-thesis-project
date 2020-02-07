import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProductCard from "../ProductCard";
import {connect} from "react-redux";
import {fetchAllProductsAction} from "../../actions/fetchAllProductsAction";

export class AllProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: []}
    }

    componentWillMount () {
        const firebaseRef = this.props.firebase.database.ref("products");
        firebaseRef.once('value').then(snapshot => {
            this.props.fetchAllProductsAction(snapshot.val());
        })
    }

    renderProductsList = () => {
        return (
            this.props.products.map(product => (
                <ProductCard product={product}/>
            ))
        )
    }

    render() {
        return (
            <div>
                {this.renderProductsList()}
                <Link to="cos-cumparaturi"><Button inverted>Vizualizati cosul de cumparaturi</Button></Link>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(
    mapStateToProps,
    {fetchAllProductsAction})
(AllProducts)
