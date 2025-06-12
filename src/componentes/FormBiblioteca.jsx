import React, { useState, useContext, useEffect } from 'react';
import { ContextBiblioteca } from '../contextos/ContextoBiblioteca.js';

export default function FormularioBiblioteca({ biblioteca, onCerrar }) {
  const { dispatch } = useContext(ContextBiblioteca);

  // Estados locales para el formulario, con valores iniciales vacíos o los de biblioteca (edición)
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');

  useEffect(() => {
    if (biblioteca) {
      setNombre(biblioteca.nombre);
      setDireccion(biblioteca.direccion);
    } else {
      setNombre('');
      setDireccion('');
    }
  }, [biblioteca]);

  function generarId() {
    return Date.now().toString();
  }

  window.generarId = generarId;
  generarId();



  function manejarSubmit(e) {
    e.preventDefault();

    const nuevaBiblioteca = {
      id: biblioteca ? biblioteca.id : generarId(),
      nombre,
      direccion,
    };

    console.log('Biblioteca generada:', nuevaBiblioteca);

    if (biblioteca) {
      dispatch({ type: 'modificar', payload: nuevaBiblioteca });
    } else {
      dispatch({ type: 'agregar', payload: nuevaBiblioteca });
    }


    onCerrar();
  }

  return (
    <form onSubmit={manejarSubmit} style={{ marginTop: 20, border: '1px solid gray', padding: 10 }}>
      <h3>{biblioteca ? 'Editar Biblioteca' : 'Agregar Biblioteca'}</h3>

      <label>Nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
      />

      <label>Dirección:</label>
      <input
        type="text"
        value={direccion}
        onChange={e => setDireccion(e.target.value)}
        required
      />

      <button type="submit" style={{ marginTop: 10 }}>
        Guardar
      </button>
      <button type="button" onClick={onCerrar} style={{ marginLeft: 10 }}>
        Cancelar
      </button>
    </form>
  );
}
