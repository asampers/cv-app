import './App.css';
import { Header } from './components/Header';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className='resume container-fluid d-flex flex-column border border-black border-2 rounded'>
      <Header />
      <Education />
      <Experience />
      <Skills />
    </div>
  )
}

export default App
