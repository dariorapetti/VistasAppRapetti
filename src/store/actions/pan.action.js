export const SELECT_PAN = 'SELECT_PAN';
export const FILTER_PAN = 'FILTER_PAN';

export const selectPan = (id) => ({
    type: SELECT_PAN,
    panID: id
});

export const filterPan = (id) => ({
    type: FILTER_PAN,
    categoriaID: id
});