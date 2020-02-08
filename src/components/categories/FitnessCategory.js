import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProductCard from "../ProductCard";
import {fetchFitnessProductsAction} from "../../actions/fetchFitnessProductsAction";
import {connect} from "react-redux";

export class FitnessCategory extends React.Component {
    componentDidMount() {
        let firebaseRef = this.props.firebase.database.ref("products/fitness");
        firebaseRef.once('value').then(snapshot => {
            this.props.fetchFitnessProductsAction(snapshot.val());
        });
    }

    renderList = () => {
        return (
            <div>
                {this.props.fitnessProducts.map(product => (
                    <ProductCard product={product}/>
                ))}
            </div>
        )
    };

    render() {
        return (
            <div>
                {this.renderList()}
                <Link to="/categorii"><Button>Inapoi</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    fitnessProducts: state.fitnessProducts
});

export default connect(
    mapStateToProps,
    {fetchFitnessProductsAction})
(FitnessCategory)
