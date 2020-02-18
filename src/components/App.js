import React from 'react';
import Header from './Header';
import Content from './Content';
import {BrowserRouter as Router} from 'react-router-dom';
import history from '../history'
import '../styles/Header.css'

function App() {
    return (
        <div id="overflow">
            <Router history={history}>
                    <Header title='E-com'/>
                    <Content/>
            </Router>
        </div>
    );
}

export default App;
