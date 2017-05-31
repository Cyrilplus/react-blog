import React from 'react';
import {render} from 'react-dom';
import './styles/base.scss';
import App from './pages/app';

import { Provider } from 'react-redux';
import store from './store/configureStore';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
