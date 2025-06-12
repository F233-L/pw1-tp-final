export const initialStateBiblioteca = [];

export function reducerBiblioteca(state, action) {
  switch(action.type) {
    case 'agregar':
      return [...state, action.payload];
    case 'eliminar':
      return state.filter(biblioteca => biblioteca.id !== action.id);
    case 'modificar':
      return state.map(biblioteca => 
        biblioteca.id === action.payload.id ? action.payload : biblioteca
      );
    default:
      return state;
  }
}
