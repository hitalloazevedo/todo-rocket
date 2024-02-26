import './App.css'
import { Header } from './components/Header'
import { PlusCircle } from 'phosphor-react'

function App() {
  return (
    <>
      <Header/>
      
      <div className='newTask'>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button className='newTaskButton'>Criar <PlusCircle size={16}/></button>
      </div>
    </>
  )
}

export default App
