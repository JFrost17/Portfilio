import React, { Suspense, useRef, useMemo, useState } from 'react'
import { Grid, TextField, Typography } from '@mui/material'

export default function Experience() {
    return (
        <div style={{ width: '80%', height: '100%', marginLeft: '10%', paddingBottom: '3vh', overflowX: 'hidden' }}>
            <h1 style={{
                textAlign: 'center',
                marginBottom: '10px',
                marginTop: 0,
                color: 'white',
                textShadow: '2px 2px 2px black',
                fontSize: '2em'
            }} >Work Experience</h1>

            <div style={{
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                padding: '20px',
            }}>
                <Grid container>
                    <Grid size={12}>
                        <Typography style={{ marginBottom: '5px', fontSize: '1.2em', color: 'black', fontWeight: 'bold' }}>
                            Software Developer January 2023-Present
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <Typography style={{
                            fontSize: '1em',
                            fontWeight: 'bold'
                        }}>
                            &nbsp;&nbsp;Proto Manufacturing, LaSalle, Ontario
                        </Typography>
                    </Grid>

                    <Grid item size={12}>
                        <Typography style={{
                            fontSize: '1em',
                            paddingLeft: '12px'
                        }}>
                            • Lead front-end developer for multiple system's GUIs, ensuring client needs are being met effectivley and sustaining a high standard of quality for our products.
                        </Typography>
                    </Grid>
                    <Typography style={{
                        fontSize: '1em',
                        paddingLeft: '12px'
                    }}>
                        • Create and maintain software products for customers such as NASA and Johns Hopkins University.
                    </Typography>
                    <Typography style={{
                        fontSize: '1em',
                        paddingLeft: '12px'
                    }}>
                        •  Partnered with fellow developers to implement RESTful APIs that serve data to our GUIs operated by hundreds of users.
                    </Typography>
                    <Typography style={{
                        fontSize: '1em',
                        paddingLeft: '12px'
                    }}>
                        •  Refactored single use code into reusable components, creating large performance boosts to save 100+ hours of development time.
                    </Typography>
                </Grid>
            </div>
        </div>
    )
}


// Software Developer January 2023-Present
//  Proto Manufacturing, LaSalle, Ontario
// • Lead front-end developer for multiple systems, ensuring client needs are being met efficiently while
// sustaining our products high standard of quality.
// • Create and maintain software products for customers such as NASA and Johns Hopkins University.
// • Partnered with fellow developers to implement RESTful APIs that serve data to the front-end operated
// by hundreds of users.
// • Refactored single use code into reusable components with large performance boosts to save 100+
// hours of development time.