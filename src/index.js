import React from 'react';
import ReactDOM from 'react-dom/client';  // Usamos React 18+
import App from './componentes/App.jsx';
import { ContextLibroProvider } from './contextos/ContextoLibro.js';
import { ContextBibliotecaProvider } from './contextos/ContextoBiblioteca.js';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ContextLibroProvider>
    <ContextBibliotecaProvider>
      <App />
    </ContextBibliotecaProvider>
  </ContextLibroProvider>
);
