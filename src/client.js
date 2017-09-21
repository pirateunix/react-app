import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/Index';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {Route} from 'react-router-dom';

const history = createBrowserHistory();
const store = configureStore({}, history);
const component = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}/>
        </ConnectedRouter>
    </Provider>
);
ReactDOM.render(component, document.getElementById('react-view'));
