import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CategoriaReducer from './reducers/categoria.reducer';
import PanReducer from './reducers/pan.reducer';
import CartReducer from './reducers/cart.reducer';
import OrderReducer from './reducers/order.reducer';
import AuthReducer from './reducers/auth.reducer';

const RootReducer = combineReducers({
    categorias: CategoriaReducer,
    panes: PanReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));