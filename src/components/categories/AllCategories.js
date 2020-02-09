import React from 'react'
import {Link} from "react-router-dom";
import {CategoryCard} from "../CategoryCard";

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

