import './App.css';
import { Header } from './components/Header';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className='resume container-fluid d-flex align-items-center flex-column border border-black border-2 rounded'>
      <h1>Resume</h1>
      <Header />
      <Education />
      {/*<Container title="Experience">
        <Experience />
      </Container>*/}
      <Skills />
    </div>
  )
}

export default App
