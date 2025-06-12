import React, { createContext, useReducer } from 'react';
import { reducerLibro, initialStateLibro } from '../reducers/ReducerLibro.js';

export const ContextLibro = createContext();

export function ContextLibroProvider({ children }) {
  const [state, dispatch] = useReducer(reducerLibro, initialStateLibro);

  const agregarLibro = (libro) => dispatch({ type: 'agregar', payload: libro });
  const eliminarLibro = (id) => dispatch({ type: 'eliminar', id });
  const modificarLibro = (libro) => dispatch({ type: 'modificar', payload: libro });

  return (
    <ContextLibro.Provider value={{ libros: state, agregarLibro, eliminarLibro, modificarLibro, dispatch }}>
      {children}
    </ContextLibro.Provider>
  );
}
