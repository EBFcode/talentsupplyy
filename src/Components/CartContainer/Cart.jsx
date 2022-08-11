import * as React from 'react';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Button, IconButton } from '@mui/material';
import { useContext } from 'react';

export default function CartWidget() {

  const { removeItemId } = useContext (CartContext)

  const {cart, total} = React.useContext(CartContext);
  const navigate = useNavigate()

  return (
    <>
      {cart.length === 0 ? 
        <Container fixed>
            <Typography variant="h3" color="initial" align='center' sx={{ p: 5 }}>
              CARRITO VACIÓ
              <br />
              <ProductionQuantityLimitsIcon />
              <br />
              <Button href='/' variant="outlined">IR A HOME</Button>
            </Typography>
        </Container>
      : 
        <Container fixed>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="spanning table">
                  <TableHead sx={{backgroundColor: '#000'}}>
                    <TableRow sx={{backgroundColor: '#161032'}}>
                      <TableCell align="center" sx={{ color: 'white' }} colSpan={3}>
                        Detalles
                      </TableCell>
                      <TableCell align="right" sx={{ color: 'white' }} >Precio</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: 'white' }}>Descripcion</TableCell>
                      <TableCell sx={{ color: 'white' }} align="right">Cantidad.</TableCell>
                      <TableCell sx={{ color: 'white' }} align="right">Unidad</TableCell>
                      <TableCell sx={{ color: 'white' }} align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody >
                    {cart.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell >{row.nombre}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.precio}</TableCell>
                        <TableCell align="right">{row.precio * row.quantity}</TableCell>
                        <TableCell align="right"><button onClick={() => removeItemId(row.id)}>
                          p
                        </button></TableCell>
                      </TableRow>
                    ))}

                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell align="right">{total}</TableCell>
                      <TableCell align="right"><button onClick={() => navigate('/checkout')}>Pagar</button></TableCell>
                    </TableRow>
                    
                  </TableBody>
                </Table>
              </TableContainer>

            </Container>
          }
    </>
    
  );
}
