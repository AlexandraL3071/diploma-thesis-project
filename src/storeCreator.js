import {combineReducers, createStore} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import { firebaseConfig} from './components/Firebase/Firebase';
import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
    firebase: firebaseReducer
});

const initialState = {};
export const store = createStore(rootReducer, initialState);

export const reactReduxFirebaseProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
};
