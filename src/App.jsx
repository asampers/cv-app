//import { useState } from 'react'
import './App.css';
import { Header } from './components/Header';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Container } from './components/Container';
import { Skills } from './components/Skills';

function App() {

  return (
    <div className='resume container-fluid d-flex align-items-center flex-column border border-black border-2 rounded'>
      <h1>Resume</h1>
      <Header />
      <Container title="Education">
        <Education />
      </Container>  
      <Container title="Experience">
        <Experience />
      </Container>
      <Skills />
    </div>
  )
}

export default App
