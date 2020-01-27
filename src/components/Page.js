import React from 'react'
import NavigationBar from './NavigationBar'
import {Link, Route, Switch} from "react-router-dom";
import {Input, Segment} from "semantic-ui-react";
import AllCategories from "./categories/AllCategories";
import Favorites from "./Favorites";
import Cart from "./Cart";

class Page extends React.Component {
    render() {
        return (
            <Switch>
                <NavigationBar/>
            </Switch>
        )
    }
}

export default Page;
