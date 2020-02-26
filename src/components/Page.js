import React from 'react'
import SideMenu from './SideMenu'
import {Switch} from 'react-router-dom';
import {useFirebaseConnect} from "react-redux-firebase";
import {PRODUCTS_REF} from "../utils/linkNames";

export default function Page() {
    useFirebaseConnect(PRODUCTS_REF);

    return (
        <Switch>
            <SideMenu/>
        </Switch>
    )
}
