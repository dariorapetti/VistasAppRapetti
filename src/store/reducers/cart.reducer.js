import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } from "../actions/cart.action";

const initialState = {
    items: [],
    total: 0
}

const sumTotal = (items) => items
    .map(item => item.cantidad * item.precio)
    .reduce((a, b) => a + b, 0);

const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            let updatedCart = [];
            if(state.items.find(item => item.id === action.item.id)){
                updatedCart = state.items.map(item => {
                    if(item.id === action.item.id) item.cantidad++;
                    return item;
                });
            } else {
                const item = { ...action.item, cantidad: 1};
                updatedCart = [ ...state.items, item];
            }
            return {
                ...state,
                items: updatedCart,
                total: sumTotal(updatedCart)
            };
        case REMOVE_ITEM:
            const filteredCart = state.items.filter(item => item.id !== action.itemId);
            return {
                ...state,
                items: filteredCart,
                total: sumTotal(filteredCart)
            }
        // case CONFIRM_CART:
        //     return {
        //         ...state,
        //         panesFiltrados: state.panes.filter(pan => pan.categoria === action.categoriaID)
        //     }
        default: 
            return state;
    }
}

export default CartReducer;