import './App.css'
import { Header } from './components/Header'
import { Task } from './components/Task'
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

        <div className='tasksList'>
          {/* <div className='warningEmpty'>
            <img src={clipboard}/>
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> */}

          <Task></Task>
          <Task></Task>
        </div>
      </div>
    </>
  )
}

export default App
