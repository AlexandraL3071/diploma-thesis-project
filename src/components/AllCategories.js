import React from 'react'
import Card from "./Card";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import Bodybuilding_Category from "./categories/Bodybuilding_Category";
import Athletics_Category from "./categories/Athletics_Category";
import Swimming_Category from "./categories/Swimming_Category";

class AllCategories extends React.Component {
    constructor(props) {
        super(props);
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
