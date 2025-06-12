export const initialStateLibro = [];

export function reducerLibro(state, action) {
  switch(action.type) {
    case 'agregar':
      return [...state, action.payload];
    case 'eliminar':
      return state.filter(libro => libro.id !== action.id);
    case 'modificar':
      return state.map(libro => 
        libro.id === action.payload.id ? action.payload : libro
      );
    default:
      return state;
  }
}
