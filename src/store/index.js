import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CategoriaReducer from './reducers/categoria.reducer';
import PanReducer from './reducers/pan.reducer';
import CartReducer from './reducers/cart.reducer';

const RootReducer = combineReducers({
    categorias: CategoriaReducer,
    panes: PanReducer,
    cart: CartReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));