import React from 'react'
import './Slider.css'
import { CardMedia, Container, Typography, Button } from "@mui/material";
import { Box } from '@mui/system';

export default function Slider() {
    return (
        <React.Fragment>
            <Box sx={{position: 'relative'}}>
                <CardMedia
                        component="img"
                        height="500"
                        image="https://devicer.cmsmasters.net/wp-content/uploads/2017/12/featured-1-1-2.jpg"
                        alt="portada"
                />

                <Container maxWidth="xl">
                    <Box sx={{ width: 400, height: 200,borderRadius: 5, position: 'absolute', top: 15,left:15, p: 5}}>
                        <Typography variant="h2" color="white">
                            Conector aparte
                        </Typography>
                        <Button>Reservar</Button>
                    </Box>
                </Container>
                
            </Box>
            
            
            
        </React.Fragment>

    )
}
