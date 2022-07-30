import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";

export default function ItemDetail({ item }) {

  const [mostrarBoton, setMostrarBoton] = React.useState(true);

  const onAdd = count => console.log(count) 

  return (
    <>
      <div className="container">
        <p> ID: {item.id} </p>
        <p> Titulo: {item.titulo}</p>
        <p> Price: {item.precio}</p>
        <p> Stock: {item.stock}</p>
        <img src={item.url} alt={item.titulo} />
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
