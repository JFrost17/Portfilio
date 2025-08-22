import React, { Suspense, useRef, useMemo, useState } from 'react'
import { Grid, TextField, Typography, Button } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Projects() {
    return (
        <div style={{ width: '100%', height: '100%', zIndex: 0, position: 'absolute', marginTop: '5vh', overflowX: 'hidden', scrollbarWidth: 'none' }}>
            <Grid container justifyContent={'center'} spacing={1}>
                <Grid item size={10}>
                    <Button variant='outlined' href="https://github.com/JFrost17/Portfilio" target="_blank" style={{ color: 'black', width: '100%' }}><AccountCircleIcon style={{ fontSize: '10vh' }} /> Portfolio Github</Button>
                </Grid>
                <Grid item size={10}>
                    <Button variant='outlined' href="https://github.com/JFrost17/movie-app" target="_blank" style={{ color: 'black', width: '100%' }} ><MovieIcon style={{ fontSize: '10vh' }} />My IMDB Github</Button>
                </Grid>
                <Grid item size={10}>
                    <Button variant='outlined' href="https://jackimdb.netlify.app/" target="_blank" style={{ color: 'black', width: '100%' }} ><MovieIcon style={{ fontSize: '10vh' }} />My IMDB Website</Button>
                </Grid>
                <Grid item size={10}>
                    <Button variant='outlined' href="https://youtu.be/1Kh6DYkqaQc" target="_blank" onClick={() => {
                    }} style={{ color: 'black', width: '100%' }}><CarCrashIcon style={{ fontSize: '10vh' }} /> Unity Self Driving Car</Button>
                </Grid>
                <Grid item size={10}>
                    <Button variant='outlined' href="https://youtu.be/fNo-cdVYXPo" target="_blank" onClick={() => {
                    }} style={{ color: 'black', width: '100%' }}><CalculateIcon style={{ fontSize: '10vh' }} /> Android Studio Math Game</Button>
                </Grid>
            </Grid>
        </div >
    )
}
