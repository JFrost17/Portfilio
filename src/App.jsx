
import React, { Suspense, useRef, useMemo } from 'react'
import Background from './Background'
import { Grid, TextField } from '@mui/material'

export default function App() {
  return (
    <div style={{width:'100%', height:'100%'}}>
      <Grid item container xs={12}>
      <Background/>
      </Grid>
    </div>
  )
}
