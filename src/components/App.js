import React from 'react';
import Header from "./Header";
import Content from "./Content";
import {BrowserRouter} from "react-router-dom";
import history from '../history'

function App() {
    return (
        <div>
            <BrowserRouter basename="/sportsMAG" history={history}>
                    <Header title="E-com"/>
                    <Content/>
            </BrowserRouter>
        </div>
    );
}

export default App;
