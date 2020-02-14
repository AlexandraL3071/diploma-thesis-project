import React from 'react';
import Header from './Header';
import Content from './Content';
import {BrowserRouter} from 'react-router-dom';
import history from '../history'
import {BASENAME_LINK} from "../utils/linkNames";

function App() {
    return (
        <div>
            <BrowserRouter basename={BASENAME_LINK} history={history}>
                    <Header title='E-com'/>
                    <Content/>
            </BrowserRouter>
        </div>
    );
}

export default App;
