import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {productsReducer} from "./reducers/productsReducer";
import {combineReducers, createStore} from "redux";
import Firebase, {FirebaseContext} from './components/Firebase';
import {fitnessProductsReducer} from "./reducers/fitnessProductsReducer";
import {hikingProductsReducer} from "./reducers/hikingProductsReducer";
import {swimmingProductsReducer} from "./reducers/swimmingProductsReducer"

const store = createStore(combineReducers(
    {
        products: productsReducer,
        fitnessProducts: fitnessProductsReducer,
        hikingProducts: hikingProductsReducer,
        swimmingProducts: swimmingProductsReducer
    }));

ReactDOM.render(
    <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}>>
            <App/>
        </FirebaseContext.Provider>
    </Provider>
    , document.getElementById('root'));

serviceWorker.register();
