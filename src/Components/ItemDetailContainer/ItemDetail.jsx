import { React } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "./ItemCount/ItemCount";

export default function ItemDetail({ item }) {

  const {hola} = React.useContext(CartContext)

  function onAdd(count) {
    hola();
  }

  return (
    <>
      <div className="container">
        <p> ID: {item.id} </p>
        <p> Titulo: {item.titulo}</p>
        <p> Price: {item.precio}</p>
        <p> Stock: {item.stock}</p>
        <img src={item.url} alt={item.titulo} />
        {/* Hacer Render recordar */}
        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          Finalizar Compra
        </Link>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </>
  );
}
