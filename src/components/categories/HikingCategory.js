import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProductCard from "../ProductCard";
import {fetchHikingProductsAction} from "../../actions/fetchHikingProductsAction";
import {connect} from "react-redux";

export class HikingCategory extends React.Component {
    componentDidMount () {
        let firebaseRef = this.props.firebase.database.ref("products/hiking");
        firebaseRef.once('value').then(snapshot => {
            this.props.fetchHikingProductsAction(snapshot.val());
        });
    }

    renderList = () => {
        return (
            <div>
                {this.props.hikingProducts.map(product => (
                    <ProductCard product={product}/>
                ))}
            </div>
        )
    };

    render () {
        return (
            <div>
                {this.renderList()}
                <Link to="/categorii"><Button>Inapoi</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    hikingProducts: state.hikingProducts
});

export default connect(
    mapStateToProps,
    {fetchHikingProductsAction})
(HikingCategory)
