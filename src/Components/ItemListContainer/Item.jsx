import { Box, Typography, Button, Card, CardContent, CardMedia, CardActionArea, Container } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {

    
    return (
        <>
            <Card sx={{ width: 310,  mt: 5 }}>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.nombre}
                    </Typography>

                    {/* {item.stock == 0 ? } */}
                </CardContent>

                <CardMedia
                component="img"
                height="240"
                image={item.img}
                alt="item.nombre"
                />

                <CardContent sx={{'&:hover': {border: '3 solid black'},}}>

                    
                    
                    <Typography variant="body2" color="text.primary" align="center">
                        Precio: {item.precio}
                        
                    </Typography>
                    <Button  href={`/item/${item.id}`}>VER PRODUCTO</Button>
                    <Button  href={`/`}>Agregar al carrito</Button>
                </CardContent>
                    
                
            </Card>
        </>
    );
}
