import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function footer() {
    return (
        <Container sx={{mt: 5, background: '#000', textAlign: 'center'}} maxWidth="xl">
            <br />
            <Typography variant="h5" color="white">
                Todos los derechos reservados para sacar un 7 :D
            </Typography>
            <br />
        </Container>
    )
}
