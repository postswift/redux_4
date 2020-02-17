
import {createStore, applyMiddleware} from 'redux';
import thunk from 'react-redux';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    reducers,
    {},

);

export default store;