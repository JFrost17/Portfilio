import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField, Grid } from '@mui/material'

function App() {

  return (
    <>
      <div>
       <Grid container item xs={12}>
          <TextField> https://jackimdb.netlify.app/ </TextField>
       </Grid>
      </div>
    </>
  )
}

export default App
