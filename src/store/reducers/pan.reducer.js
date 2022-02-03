import { PANES } from "../../utils/data/panes";

const initialState = {
    panes: PANES,
    panesFiltrados: [],
    selected: null
}

const PanReducer = (state = initialState, action) => {
    return state;
}

export default PanReducer;