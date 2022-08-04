import { Box, Typography, Button, Card, CardContent, CardMedia, CardActionArea, Container } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {

    
    return (
        <>
        <Container maxWidth="xl">
            <Card sx={{ maxWidth: 345, mt: 5 }}>
                <CardActionArea href={`/item/${item.id}`}>

                    <CardMedia
                    component="img"
                    height="240"
                    image={item.img}
                    alt="item.nombre"
                    />

                    <CardContent sx={{'&:hover': {border: '3 solid black'},}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.primary" align="center">
                            ANTES: {54364}
                        </Typography>
                        <Typography variant="body2" color="text.primary" align="center">
                            AHORA: {item.precio}
                        </Typography>
                    </CardContent>
                    
                </CardActionArea>
            </Card>
        </Container>
        

        
        {/* <div className='container'>
            <p> Nombre: {item.nombre}</p>
            <p>Precio: {item.precio}</p>
            <img src={item.img} alt={item.nombre} />

            <button>
                <Link to={`/item/${item.id}`}>Ver detalle del producto</Link>
            </button>
        </div> */}
        </>
    );
}
