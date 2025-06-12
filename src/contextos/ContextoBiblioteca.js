import React, { createContext, useReducer } from 'react';
import { reducerBiblioteca, initialStateBiblioteca } from '../reducers/ReducerBiblioteca.js';

export const ContextBiblioteca = createContext();

export function ContextBibliotecaProvider({ children }) {
  const [state, dispatch] = useReducer(reducerBiblioteca, initialStateBiblioteca);

  // Funciones auxiliares que envían acciones con payload
  const agregarBiblioteca = (biblioteca) => dispatch({ type: 'agregar', payload: biblioteca });
  const eliminarBiblioteca = (id) => dispatch({ type: 'eliminar', id });
  const modificarBiblioteca = (biblioteca) => dispatch({ type: 'modificar', payload: biblioteca });

  return (
    <ContextBiblioteca.Provider value={{ 
      bibliotecas: state, 
      agregarBiblioteca, 
      eliminarBiblioteca, 
      modificarBiblioteca, 
      dispatch 
    }}>
      {children}
    </ContextBiblioteca.Provider>
  );
}

