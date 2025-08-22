import React, { Suspense, useRef, useMemo, useState } from 'react'
import { Grid, TextField, Typography } from '@mui/material'

export default function Skills() {
    return (
        <div style={{ width: '80%', height: '100%', marginLeft: '10%', paddingBottom: '3vh', overflowX: 'hidden' }}>
            <h1 style={{
                textAlign: 'center',
                marginBottom: '10px',
                marginTop: 0,
                color: 'white',
                textShadow: '2px 2px 2px black',
                fontSize: '2em'
            }} >Skills</h1>

            <div style={{
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                padding: '20px',
            }}>
                <Grid container>
                    <Grid size={12}>
                        <Typography style={{ marginBottom: '5px', fontSize: '1.2em', color: 'black', fontWeight: 'bold' }}>
                            Front End:
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • JavaScript
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • TypeScript
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • HTML
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • CSS
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • React
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • Three.js
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <Typography style={{ marginBottom: '5px', fontSize: '1.2em', color: 'black', fontWeight: 'bold' }}>
                            Back End:
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • Python
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • SQL
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • Java
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • C#
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • DJango
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <Typography style={{ marginBottom: '5px', fontSize: '1.2em', color: 'black', fontWeight: 'bold' }}>
                            App/Game Development:
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • React Native
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • Android Studio
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • Unity
                        </Typography>
                    </Grid>
                    <Grid item size={3}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • Xcode
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}