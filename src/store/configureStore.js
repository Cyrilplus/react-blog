import { createStore, applyMiddleware } from 'redux';
import createHashHistory from 'history/createHashHistory';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

export const hashHistory = createHashHistory();
const routerMiddleware = createRouterMiddleware(hashHistory);

export default createStore(rootReducer, applyMiddleware(routerMiddleware));
