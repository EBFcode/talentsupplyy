import React from 'react'
import './NavBar.css'
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';


export default function NavBar() {

    const navigate = useNavigate();

    return (
        <>
        <Typography onClick={() => navigate('/')}  variant="h2" color="primary" align='center' >
            Talent Supplay
        </Typography>
        </>
    )
}