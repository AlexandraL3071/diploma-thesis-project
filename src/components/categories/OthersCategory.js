import React from 'react'
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ProductCard from "../ProductCard";
import {fetchOthersProductsAction} from "../../actions/fetchOthersProductsAction";
import {connect} from "react-redux";

export class OthersCategory extends React.Component {
    componentDidMount () {
        let firebaseRef = this.props.firebase.database.ref("products/others");
        firebaseRef.once('value').then(snapshot => {
            this.props.fetchOthersProductsAction(snapshot.val());
        });
    }

    renderList = () => {
        return (
            <div>
                {this.props.othersProducts.map(product => (
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
    othersProducts: state.othersProducts
});

export default connect(
    mapStateToProps,
    {fetchOthersProductsAction})
(OthersCategory)
