import React, { useState, useContext, useEffect } from 'react';
import { ContextLibro } from '../contextos/ContextoLibro.js';

export default function FormularioLibro({ libro, onCerrar }) {
  const { dispatch } = useContext(ContextLibro);

  // Estado local para el formulario, inicializado con libro o vacío
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [genero, setGenero] = useState('Terror');

  useEffect(() => {
    if (libro) {
      setNombre(libro.nombre);
      setDescripcion(libro.descripcion);
      setFechaIngreso(libro.fechaIngreso);
      setGenero(libro.genero);
    } else {
      setNombre('');
      setDescripcion('');
      setFechaIngreso('');
      setGenero('Terror');
    }
  }, [libro]);

  function generarId() {
    return Date.now().toString();
  }


  function manejarSubmit(e) {
    e.preventDefault();

    const nuevoLibro = {
      id: libro ? libro.id : generarId(),
      nombre,
      descripcion,
      fechaIngreso,
      genero,
    };

    console.log("Libro generado: ", nuevoLibro);

    if (libro) {
      dispatch({ type: 'modificar', payload: nuevoLibro });
    } else {
      dispatch({ type: 'agregar', payload: nuevoLibro });
    }

    onCerrar();
  }

  return (
    <form onSubmit={manejarSubmit} style={{ marginTop: 20, border: '1px solid gray', padding: 10 }}>
      <h3>{libro ? 'Editar Libro' : 'Agregar Libro'}</h3>

      <label>Nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
      />

      <label>Descripción:</label>
      <textarea
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        required
      />

      <label>Fecha de Ingreso:</label>
      <input
        type="date"
        value={fechaIngreso}
        onChange={e => setFechaIngreso(e.target.value)}
        required
      />

      <label>Género:</label>
      <select value={genero} onChange={e => setGenero(e.target.value)}>
        <option value="Terror">Terror</option>
        <option value="Fantasia">Fantasia</option>
        <option value="Comedia">Comedia</option>
      </select>

      <button type="submit" style={{ marginTop: 10 }}>
        Guardar
      </button>
      <button type="button" onClick={onCerrar} style={{ marginLeft: 10 }}>
        Cancelar
      </button>
    </form>
  );
}
