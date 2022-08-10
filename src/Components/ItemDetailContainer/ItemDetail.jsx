import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "./ItemCount/ItemCount";
import "./itemDetail.css";
import { Alert, AlertTitle, Button } from "@mui/material";


export default function ItemDetail({ item }) {
  const [mostrarBoton, setMostrarBoton] = React.useState(true);
  const { addItem } = React.useContext(CartContext);

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
              ) : (
                
                <Link to={"/cart"} style={{ textDecoration: "none" }}>
                  <Alert severity="success">
                    <AlertTitle>HECHO!</AlertTitle>
                    Agregado al carrito — <strong>VAMOS, compra más!</strong>
                </Alert>
                  <button>Finalizar Compra</button>

                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
