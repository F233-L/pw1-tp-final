import React, { useState } from 'react';
import { ContextLibroProvider } from '../contextos/ContextoLibro.js';
import { ContextBibliotecaProvider } from '../contextos/ContextoBiblioteca.js';
import TablaLibros from './TablaLibros.jsx';
import TablaBibliotecas from './TablaBibliotecas.jsx';
import FormularioLibro from './FormLibro.jsx';
import FormularioBiblioteca from './FormBiblioteca.jsx';
import './AppRouters.css';

export default function App() {
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);
  const [bibliotecaSeleccionada, setBibliotecaSeleccionada] = useState(null);

  const [mostrarFormLibro, setMostrarFormLibro] = useState(false);
  const [mostrarFormBiblioteca, setMostrarFormBiblioteca] = useState(false);

  function abrirFormLibro(libro = null) {
    setLibroSeleccionado(libro);
    setMostrarFormLibro(true);
  }

  function abrirFormBiblioteca(biblioteca = null) {
    setBibliotecaSeleccionada(biblioteca);
    setMostrarFormBiblioteca(true);
  }

  function cerrarFormLibro() {
    setLibroSeleccionado(null);
    setMostrarFormLibro(false);
  }

  function cerrarFormBiblioteca() {
    setBibliotecaSeleccionada(null);
    setMostrarFormBiblioteca(false);
  }

  return (
    <ContextLibroProvider>
      <ContextBibliotecaProvider>
        <div className="app-container">
          <h1>Gestión de Libros y Bibliotecas</h1>

          <h2>Libros</h2>
          <TablaLibros onEditar={abrirFormLibro} />

          <h2>Bibliotecas</h2>
          <TablaBibliotecas onEditar={abrirFormBiblioteca} />

          {mostrarFormLibro && (
            <FormularioLibro
              libro={libroSeleccionado}
              onCerrar={cerrarFormLibro}
            />
          )}

          {mostrarFormBiblioteca && (
            <FormularioBiblioteca
              biblioteca={bibliotecaSeleccionada}
              onCerrar={cerrarFormBiblioteca}
            />
          )}
        </div>
      </ContextBibliotecaProvider>
    </ContextLibroProvider>
  );
}
