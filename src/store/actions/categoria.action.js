export const SELECT_CATEGORIA = 'SELECT_CATEGORIA';

export const selectCategoria = (id) => ({
    type: SELECT_CATEGORIA,
    categoriaID: id
});