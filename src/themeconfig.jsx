import { createTheme } from '@mui/material'
import { purple } from '@mui/material/colors';
import React from 'react'

const theme = createTheme({
    palette: {
        primary: {
            main: '#293132'
        },
        secondary: {
            main: '#474044'
        },
        blueYonder: {
            main: '#547AA5'
        },
        purple: {
            main: purple[800],
        }
    }
})

export default theme;