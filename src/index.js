import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
// import {productsReducer} from "./reducers/productsReducer";
// import {combineReducers, createStore} from "redux";
// import Firebase, {FirebaseContext} from './components/Firebase';
// import {fitnessProductsReducer} from "./reducers/fitnessProductsReducer";
// import {tennisProductsReducer} from "./reducers/tennisProductsReducer";
// import {othersProductsReducer} from "./reducers/othersProductsReducer"
// import {searchProductsReducer} from "./reducers/searchProductsReducer";
// import {applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {reactReduxFirebaseProps, store} from "./storeCreator";

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider>
    , document.getElementById('root'));

serviceWorker.register();
