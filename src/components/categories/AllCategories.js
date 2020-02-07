import React from 'react'
import {Link} from "react-router-dom";
import {CategoryCard} from "../CategoryCard";

class AllCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    render() {
        return (
            <div>
                <Link to="/categorii/culturism"><CategoryCard category="culturism"/></Link>
                <Link to="/categorii/atletism"><CategoryCard category="atletism"/></Link>
                <Link to="/categorii/inot"><CategoryCard category="inot"/></Link>
            </div>
        )
    }
}

export default AllCategories;
