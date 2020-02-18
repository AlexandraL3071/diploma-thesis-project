import React from 'react';
import Header from './Header';
import Content from './Content';
import {BrowserRouter as Router} from 'react-router-dom';
import history from '../history'

function App() {
    return (
        <div>
            <Router history={history}>
                    <Header title='E-com'/>
                    <Content/>
            </Router>
        </div>
    );
}

export default App;
