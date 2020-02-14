import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {reactReduxFirebaseProps, store} from './storeCreator';

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider>
    , document.getElementById('root'));

serviceWorker.register();
