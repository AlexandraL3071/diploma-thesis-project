import React from 'react'
import {Link} from "react-router-dom";
import {CategoryCard} from "../CategoryCard";
// import {fetchFitnessProductsAction} from "../../actions/fetchFitnessProductsAction";
// import {fetchTennisProductsAction} from "../../actions/fetchTennisProductsAction";
// import {fetchOthersProductsAction} from "../../actions/fetchOthersProductsAction";
// import {connect} from "react-redux";

export default class AllCategories extends React.Component {
    render() {
        return (
            <div>
                <Link to="/categorii/fitness"><CategoryCard category="culturism"/></Link>
                <Link to="/categorii/tenis"><CategoryCard category="tenis"/></Link>
                <Link to="/categorii/altele"><CategoryCard category="altele"/></Link>
            </div>
        )
    }
}

