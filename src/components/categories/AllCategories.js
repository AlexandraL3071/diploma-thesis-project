import React from 'react'
import {Link} from "react-router-dom";
import {CategoryCard} from "../CategoryCard";
// import {fetchFitnessProductsAction} from "../../actions/fetchFitnessProductsAction";
// import {fetchHikingProductsAction} from "../../actions/fetchHikingProductsAction";
// import {fetchSwimmingProductsAction} from "../../actions/fetchSwimmingProductsAction";
// import {connect} from "react-redux";

export default class AllCategories extends React.Component {
    componentDidMount () {
        // let firebaseRef = this.props.firebase.database.ref("products/fitness");
        // firebaseRef.once('value').then(snapshot => {
        //     this.props.fetchFitnessProductsAction(snapshot.val());
        // })
        //
        // firebaseRef = this.props.firebase.database.ref("products/hiking");
        // firebaseRef.once('value').then(snapshot => {
        //     this.props.fetchHikingProductsAction(snapshot.val());
        // })
        //
        // firebaseRef = this.props.firebase.database.ref("products/swimming");
        // firebaseRef.once('value').then(snapshot => {
        //     this.props.fetchSwimmingProductsAction(snapshot.val());
        // })
    }

    render() {
        return (
            <div>
                <Link to="/categorii/culturism"><CategoryCard category="culturism"/></Link>
                <Link to="/categorii/alpinism"><CategoryCard category="alpinism"/></Link>
                <Link to="/categorii/inot"><CategoryCard category="inot"/></Link>
            </div>
        )
    }
}
//
// const mapStateToProps = (state) => {
//     return {
//         fitnessProducts: state.fitnessProducts,
//         hikingProducts: state.hikingProducts,
//         swimmingProducts: state.swimmingProducts
//     }
// }
//
// export default connect(
//     mapStateToProps,
//     {fetchFitnessProductsAction, fetchHikingProductsAction, fetchSwimmingProductsAction})
// (AllCategories)

