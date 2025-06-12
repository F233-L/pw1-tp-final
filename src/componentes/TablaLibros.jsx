import React, { useContext, useState } from 'react';
import { ContextLibro } from '../contextos/ContextoLibro.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FormularioLibro from './FormLibro.jsx';

export default function TablaLibros() {
  const { libros, dispatch } = useContext(ContextLibro);
  const [libroEditar, setLibroEditar] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  function eliminarLibro(id) {
    if (confirm('¿Seguro querés eliminar este libro?')) {
      dispatch({ type: 'eliminar', id });
    }
  }

  function abrirFormulario(libro = null) {
    setLibroEditar(libro);
    setFormVisible(true);
  }

  function cerrarFormulario() {
    setLibroEditar(null);
    setFormVisible(false);
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => abrirFormulario()}>
        Agregar Libro
      </Button>

      {formVisible && (
        <FormularioLibro libro={libroEditar} onCerrar={cerrarFormulario} />
      )}

      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Fecha Ingreso</TableCell>
              <TableCell>Género</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

 <TableBody>
  {Array.isArray(libros) && libros.length > 0 ? (
    libros.map((libro, index) => {
      if (!libro) return null; // si libro es undefined o null, ignora
      return (
        <TableRow key={libro.id || index}>
          <TableCell>{libro.nombre}</TableCell>
          <TableCell>{libro.descripcion}</TableCell>
          <TableCell>{libro.fechaIngreso}</TableCell>
          <TableCell>{libro.genero}</TableCell>
          <TableCell>
            <Button
              size="small"
              variant="outlined"
              onClick={() => abrirFormulario(libro)}
            >
              Editar
            </Button>
            <Button
              size="small"
              color="error"
              variant="outlined"
              style={{ marginLeft: 8 }}
              onClick={() => eliminarLibro(libro.id)}
            >
              Eliminar
            </Button>
          </TableCell>
        </TableRow>
      );
    })
  ) : (
    <TableRow>
      <TableCell colSpan={5} align="center">
        No hay libros cargados.
      </TableCell>
    </TableRow>
  )}
</TableBody>

        </Table>
      </TableContainer>
    </>
  );
}
