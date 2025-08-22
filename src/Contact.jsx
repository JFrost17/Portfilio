import React, { Suspense, useRef, useMemo, useState } from 'react'
import { Grid, TextField, Typography } from '@mui/material'

export default function Contact() {
    return (
        <div style={{ width: '50%', height: '100%', marginLeft: '25%', overflowX: 'hidden' }}>
            <h1 style={{
                textAlign: 'center',
                marginBottom: '30px',
                color: 'white',
                textShadow: '2px 2px 2px black',
                fontSize: '7vh'
            }} >Contact Me</h1>

            <div style={{
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                padding: '20px'
            }}>
                <Typography style={{ marginBottom: '20px', fontSize: '2.4vw', textAlign: 'center', color: 'black' }}>
                    📧 Email: <a href="mailto:jmcleod17@live.ca">jmcleod17@live.ca</a>
                </Typography>
                <Typography style={{
                    color: '#007BFF',
                    textDecoration: 'none',
                    fontSize: '2.4vw', textAlign: 'center',
                    marginBottom: '30px',
                }}>
                    📞 Phone: <a href="tel:5195667439">519-566-7439</a>
                </Typography>
                <Typography style={{
                    textDecoration: 'none',
                    fontSize: '2.4vw', textAlign: 'center',
                }}>
                    💼 Linkedin:  <a href="https://www.linkedin.com/in/jack-mcleod17/">Jack McLeod</a>
                </Typography>
            </div>
        </div>
    )
}
