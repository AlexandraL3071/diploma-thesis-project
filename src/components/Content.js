import React from 'react'
import Page from './Page';
import {Redirect, Route, Switch} from 'react-router';

class Content extends React.Component {
    render() {
        return (
            <div className='ui container'>
                <Switch>
                    <Route exact path='/'><Redirect to='/categorii'/></Route>
                </Switch>
                <Page/>
            </div>
        )
    }
}

export default Content;
