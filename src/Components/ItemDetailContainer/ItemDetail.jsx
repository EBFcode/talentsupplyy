import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "./ItemCount/ItemCount";

export default function ItemDetail({ item }) {

  const [mostrarBoton, setMostrarBoton] = React.useState(true);
  const {addItem} = React.useContext(CartContext)

  function onAdd(count) {
    addItem(item, count)
  }

  return (
    <>
      <div className="container">
        <p> Nombre: {item.nombre}</p>
        <p> Price: {item.precio}</p>
        <p> Stock: {item.stock}</p>
        <img src={item.img} alt={item.nombre} />
        <div>
          {mostrarBoton ? 
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} setMostrarBoton={setMostrarBoton} /> 
          : 
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            Finalizar Compra
          </Link> }
        </div>
      </div>
    </>
  );
}
