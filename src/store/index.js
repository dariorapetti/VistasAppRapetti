import { createStore, combineReducers } from 'redux';

import CategoriaReducer from './reducers/categoria.reducer';
import PanReducer from './reducers/categoria.reducer';

const RootReducer = combineReducers({
    categorias: CategoriaReducer,
    panes: PanReducer
});

export default createStore(RootReducer);