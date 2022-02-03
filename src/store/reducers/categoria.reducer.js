import { CATEGORIES } from "../../utils/data/categorias";
import { SELECT_CATEGORIA } from "../actions/categoria.action";

const initialState = {
    categorias: CATEGORIES,
    selected: null
}

const CategoriaReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_CATEGORIA:
            const indexCategoria = state.categorias.findIndex(categoria => categoria.id == action.categoriaID);
            if(indexCategoria !== -1){
                return {
                    ...state,
                    selected: state.categorias[indexCategoria]
                }
            } else {
                return state;
            }
        default: 
            return state;
    } 
}

export default CategoriaReducer;