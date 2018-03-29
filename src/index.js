import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import App from './containers/App';

render(
    <Provider store={store}>
        <div className="blabla">
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </div>
    </Provider>
    , 
    document.getElementById('root')
);