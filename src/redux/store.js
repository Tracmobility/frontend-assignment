import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './root-reducer';    
import thunk from 'redux-thunk';
const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
export default store;
