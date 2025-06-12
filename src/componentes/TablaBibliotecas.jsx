import React, { useContext, useState } from 'react';
import { ContextBiblioteca } from '../contextos/ContextoBiblioteca.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FormularioBiblioteca from './FormBiblioteca.jsx';

export default function TablaBibliotecas() {
  const { bibliotecas, dispatch } = useContext(ContextBiblioteca);
  const [bibliotecaEditar, setBibliotecaEditar] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  function eliminarBiblioteca(id) {
    if (confirm('¿Seguro querés eliminar esta biblioteca?')) {
      dispatch({ type: 'eliminar', id });
    }
  }

  function abrirFormulario(biblioteca = null) {
    setBibliotecaEditar(biblioteca);
    setFormVisible(true);
  }

  function cerrarFormulario() {
    setBibliotecaEditar(null);
    setFormVisible(false);
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => abrirFormulario()}>
        Agregar Biblioteca
      </Button>

      {formVisible && (
        <FormularioBiblioteca biblioteca={bibliotecaEditar} onCerrar={cerrarFormulario} />
      )}

      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {bibliotecas && bibliotecas.length > 0 ? (
              bibliotecas
                .filter(biblio => biblio !== undefined && biblio !== null)
                .map((biblio) => (
                  <TableRow key={biblio.id}>
                    <TableCell>{biblio.nombre}</TableCell>
                    <TableCell>{biblio.direccion}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => abrirFormulario(biblio)}
                      >
                        Editar
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        variant="outlined"
                        style={{ marginLeft: 8 }}
                        onClick={() => eliminarBiblioteca(biblio.id)}
                      >
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No hay bibliotecas cargadas.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
