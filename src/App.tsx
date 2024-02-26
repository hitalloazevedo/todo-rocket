import './App.css'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header/>
      
      <div className='newTask'>
        <input type="text" />
        <button>Criar [icon]</button>

      </div>
    </>
  )
}

export default App
