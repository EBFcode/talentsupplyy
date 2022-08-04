import React from 'react'
import './Slider.css'
import { CardMedia, Container, Typography, Button } from "@mui/material";
import { Box } from '@mui/system';
import { Transaction } from 'firebase/firestore';

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
                    <Box sx={{ width: 400, height: 200,borderRadius: 5, position: 'absolute', top: 100,left:'10%', p: 5}}>
                        <Typography variant="h3" color="white">
                            Lo más caro siempre es mejor
                        </Typography>
                        <Button variant="contained" color="success" sx={{ px: 8,py: 2, mt: 5, '&:hover':{transition: '1s', backgroundColor: '#000'},}} href="/">Reservar</Button>
                    </Box>
                </Container>
                
            </Box>
            
            
            
        </React.Fragment>

    )
}
