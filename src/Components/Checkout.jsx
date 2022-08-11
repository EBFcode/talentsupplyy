import React, { useState, useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


export default function Checkout() {
  const { cart, clear, total } = useContext(CartContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(evento) {
    evento.preventDefault();

    const orders = {
      buyer: { name, tel, email },
      item: cart,
      price: total,
    };

    if (!name && !tel && !email) {
      return;
    }

    const db = getFirestore();
    const reference = collection(db, "orders");

    try {
      addDoc(reference, orders).then((id) => console.log(id));
      alert('🤝 Producto comprado!✅ ');
      clear()
      navigate('/')
      } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {cart.length === 0 ? 
        <Container fixed>
            <Typography variant="h3" color="initial" align='center' sx={{ p: 5 }}>
              CHECKOUT VACIÓ
              <br />
              <ProductionQuantityLimitsIcon />
              <br />
              <Button href='/' variant="outlined">IR A HOME</Button>
            </Typography>
        </Container>
        :
        <div>
          <h1>Terminar compra, ingrese datos</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre"
              required
            />
            <br />
            <input
              type="tel"
              onChange={(e) => setTel(e.target.value)}
              placeholder="Numero"
              required
            />
            <br />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <br />
            <button>Comprar</button>
          </form>
        </div>
      }
    </>
  );
}
