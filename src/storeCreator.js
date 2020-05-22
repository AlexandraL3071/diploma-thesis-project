import {combineReducers, createStore} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import { firebaseConfig} from './firebase';
import firebase from 'firebase/app';
import 'firebase/database';

const rootReducer = combineReducers({
    firebase: firebaseReducer
});

const initialState = {};
export const store = createStore(rootReducer, initialState);

firebase.initializeApp(firebaseConfig);

export const reactReduxFirebaseProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
};
