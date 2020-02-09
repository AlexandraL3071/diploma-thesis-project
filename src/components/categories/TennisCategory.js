import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProductCard from "../ProductCard";
import {fetchTennisProductsAction} from "../../actions/fetchTennisProductsAction";
import {connect} from "react-redux";

export class TennisCategory extends React.Component {
    componentDidMount () {
        let firebaseRef = this.props.firebase.database.ref("products/tennis");
        firebaseRef.once('value').then(snapshot => {
            this.props.fetchTennisProductsAction(snapshot.val());
        });
    }

    renderList = () => {
        return (
            <div>
                {this.props.tennisProducts.map(product => (
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
    tennisProducts: state.tennisProducts
});

export default connect(
    mapStateToProps,
    {fetchTennisProductsAction})
(TennisCategory)
