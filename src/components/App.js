import React from 'react';
import Header from './Header';
import Content from './Content';
import {BrowserRouter as Router} from 'react-router-dom';
import history from '../history'
import {BASENAME_LINK} from "../utils/linkNames";

function App() {
    return (
        <div>
            <Router basename={BASENAME_LINK} history={history}>
                    <Header title='E-com'/>
                    <Content/>
            </Router>
        </div>
    );
}

export default App;
