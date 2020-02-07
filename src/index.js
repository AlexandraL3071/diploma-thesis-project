import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {productsReducer} from "./reducers/productsReducer";
import {createStore} from "redux";
import Firebase, {FirebaseContext} from './components/Firebase';

const store = createStore(productsReducer);

ReactDOM.render(
    <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}>
            <App/>
        </FirebaseContext.Provider>
    </Provider>
    , document.getElementById('root'));

serviceWorker.register();
