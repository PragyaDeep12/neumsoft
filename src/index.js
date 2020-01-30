import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/bootstrap.css'
import './styles/custom.css'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import history from './utils/history';
import App from './containers/App';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const initialState = {};
const store = configureStore(initialState, history);
ReactDOM.render(
<Provider store={store}> 
<BrowserRouter>
<Route>
        <App />
        </Route>
        </BrowserRouter>
     </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
