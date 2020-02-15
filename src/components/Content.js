import React from 'react'
import Page from './Page';
import {Redirect, Route, Switch} from 'react-router';
import {CATEGORIES_LINK} from "../utils/linkNames";

class Content extends React.Component {
    render() {
        return (
            <div className='ui container'>
                <Switch>
                    <Route exact path='/'><Redirect to={CATEGORIES_LINK}/></Route>
                </Switch>
                <Page/>
            </div>
        )
    }
}

export default Content;
