import { PANES } from "../../utils/data/panes";
import { SELECT_PAN, FILTER_PAN } from "../actions/pan.action";

const initialState = {
    panes: PANES,
    panesFiltrados: [],
    selected: null
}

const PanReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_PAN:
            return {
                ...state,
                selected: state.panes.find(pan => pan.id === action.panID)
            }
        case FILTER_PAN:
            return {
                ...state,
                panesFiltrados: state.panes.filter(pan => pan.categoria === action.categoriaID)
            }
        default: 
            return state;
    }
}

export default PanReducer;