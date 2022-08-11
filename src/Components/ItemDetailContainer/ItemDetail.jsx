import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "./ItemCount/ItemCount";
import "./itemDetail.css";
import { Alert, AlertTitle, Button } from "@mui/material";


export default function ItemDetail({ item }) {

  const { resultadoTerminarCompra } = useContext(CartContext);

  const [mostrarBoton, setMostrarBoton] = React.useState(true);
  const { addItem } = React.useContext(CartContext);

  const navigate = useNavigate()

  function onAdd(count) {
    addItem(item, count);
  }

  return (
    <>
      <div className="contenedor">
        <div className="gridContainer">

          <div className="gridItem">
            <img src={item.img} alt={item.nombre} />
          </div>

          <br />

          <div className="gridItem descripcion">
            <p style={{fontSize: 20, fontWeight: 'bold' }}>{item.nombre}</p>
            <p style={{fontSize: 20 }}> Precio: <span style={{fontWeight: 'bold', color: '#50D8D7' }}>{item.precio}</span></p>
            <div>
              {mostrarBoton ? (
                <ItemCount
                  stock={item.stock}
                  initial={1}
                  onAdd={onAdd}
                  setMostrarBoton={setMostrarBoton}
                />
              ) : 
                  resultadoTerminarCompra ? ( 
                        <>
                          <Alert severity="success">
                            <AlertTitle>HECHO!</AlertTitle>
                            Agregado al carrito — <Link to={'/'}>VAMOS, compra más!</Link>
                          </Alert>
                          <br/>
                          <Link to={"/cart"} style={{ textDecoration: "none" }}>
                            
                            <button>Finalizar Compra</button>
                          </Link> 
                        </>
                  ) : ( <>
                          <Alert severity="error">
                            <AlertTitle>El stock maximo es de: <strong>{item.stock}</strong> </AlertTitle>
                            Intentalo de nuevo <strong> O RECARGA LA PAGINA!!!</strong>
                          </Alert>
                          <br/>

                          <Link to={"/cart"} style={{ textDecoration: "none" }}>
                            
                            
                            <button>Finalizar Compra</button>
                          </Link>
                      </>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
