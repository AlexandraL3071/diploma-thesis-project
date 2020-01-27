import React from 'react'
import NavigationBar from './NavigationBar'
import {Switch} from "react-router-dom";

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
