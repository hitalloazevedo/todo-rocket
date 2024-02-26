import './App.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import clipboard from './assets/clipboard.svg'


function App() {
  return (
    <>
      <Header/>
      <TaskInput/>

      <div className='tasksArea'>
        <header>
          <p className='createdTasks'>Tarefas criadas <span>0</span></p>
          <p className='doneTasks'>Concluídas <span>0</span></p>
        </header>

        <div className='tasks'>
          <img src={clipboard}/>
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </>
  )
}

export default App
