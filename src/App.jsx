
import React, { Suspense, useRef, useMemo, useState } from 'react'
import Background from './Background'
import { Button, Grid, TextField, Typography } from '@mui/material'
import resume from "./resume.pdf";
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects'
import Skills from './Skills';
import './Contact.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div style={{ width: '100vw', height: '100%', overflowX: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Grid item container xs={12}>
        {activeTab == 0 ?
          <div style={{ justifyContent: 'center', paddingTop: '2vh' }}>
            <Typography style={{ zIndex: 1, color: 'white', position: 'absolute', width: '100%', textAlign: 'center', fontSize: '5vh', textShadow: '1px 1px 2px black', fontWeight: 'bold' }}>
              Jack McLeod
            </Typography>
            <Typography style={{ zIndex: 1, color: 'white', position: 'absolute', width: '60%', textAlign: 'center', fontSize: '2vh', marginLeft: '20vw', paddingTop: '7vh', textShadow: '1px 1px 2px black', fontWeight: 'bold' }}>
              I am a highly motivated software developer with 3 years of work experience in full-stack development. I
              am eager to learn, embrace the chance to hone my current skills, and be challenged based on the needs of my
              role. I am looking forward to contributing to a team in this field of work.
            </Typography>
          </div> : <></>
        }
        <div style={{ position: 'fixed', width: '100%', height: '100vh', overflowX: 'hidden' }}>
          <Background tab={activeTab} setTab={setActiveTab} />
        </div>
        {activeTab == 1 ?
          <div >
            <Button onClick={() => { setActiveTab(0) }} style={{ marginTop: '10px', marginLeft: '10px' }} variant='contained'><ArrowBackIcon style={{ color: 'white' }} /></Button>
            <div class="animated-border-box" style={{ position: 'relative', width: '75vw', background: '#373737', marginLeft: '12.5vw', marginTop: '3vh', marginRight: '12.5vw' }}>
              <Experience />
            </div>
            <div class="animated-border-box" style={{ position: 'relative', width: '75vw', background: '#373737', marginLeft: '12.5vw', marginTop: '10vh', marginRight: '12.5vw' }}>
              <Skills />
            </div>
          </div> :
          <></>
        }
        {activeTab == 2 ?
          <div>
            <Button onClick={() => { setActiveTab(0) }} style={{ marginTop: '10px', marginLeft: '10px' }} variant='contained'><ArrowBackIcon style={{ color: 'white' }} /></Button>
            <Projects />
          </div> :
          <></>
        }
        {activeTab == 3 ?
          <div>
            <Button onClick={() => { setActiveTab(0) }} style={{ marginTop: '10px', marginLeft: '10px' }} variant='contained'><ArrowBackIcon style={{ color: 'white' }} /></Button>

          </div> :
          <></>
        }
        {activeTab == 4 ?
          <div >
            <Button onClick={() => { setActiveTab(0) }} style={{ marginTop: '10px', marginLeft: '10px' }} variant='contained'><ArrowBackIcon style={{ color: 'white' }} /></Button>
            <div class="animated-border-box" style={{ position: 'relative', width: '75vw', height: '75vh', background: '#373737', marginLeft: '12.5vw', marginTop: '6vh', marginRight: '12.5vw' }}>
              <Contact />
            </div></div> :
          <></>
        }
      </Grid>
    </div>
  )
}
