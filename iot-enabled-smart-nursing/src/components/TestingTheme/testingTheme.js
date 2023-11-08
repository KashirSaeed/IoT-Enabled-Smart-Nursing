import { Alert, Button, Container, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function TestingTheme() {
    const theme = useTheme()
    return (
        <Container sx={{ backgroundColor: theme.palette.background.default }}>
            <Typography color='primary.main' variant='h1'>H1 Variant Main</Typography>
            <Typography color='primary.light' variant='h1'>H1 Variant Light</Typography>
            <Typography color='primary.dark' variant='h1'>H1 Variant Dark</Typography>
            <Typography color='secondary' variant='h2'>H2 Variant Main</Typography>
            <Typography color='secondary.light' variant='h2'>H2 Variant Light</Typography>
            <Typography color='secondary.dark' variant='h2'>H2 Variant Dark</Typography>
            <Typography color='text.secondary' variant='h3'>H3 Variant</Typography>
            <Typography variant='h4'>H4 Variant</Typography>
            <Typography color='text.secondary' variant='body1'>Body 1</Typography>
            <Typography color='text.primary' variant='body1'>Body 1</Typography>
            <Typography color='text.disabled' variant='body1'>Body 1</Typography>
            <Typography variant='body2'>Body 2</Typography>
            <Button variant='outlined'>Outlined Button</Button>
            <Button color='secondary' variant='contained'>Contained Button</Button>
            <Button variant='text'>Text Button</Button>
            <Alert severity="error" >This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>
        </Container>

    )
}
