import './App.css'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskInput } from './components/TaskInput'
import clipboard from './assets/clipboard.svg'
import { useState } from 'react'


function App() {

  const [tasks, setTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState(0)


  // Cada task é um obj {id: number, content: 'blabla'}
  interface Task {
    id: number;
    content: string;
    done: boolean;
  }

  // createNewTask receberá um task {}
  const createNewTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (taskToDelete: string) => {
    const newArray = tasks.filter(task => {
      return task.content != taskToDelete
    })

    setTasks(newArray)
    
    const leftTasks = newArray.filter(onetask => {
      return onetask.done == false
    })
    
    setDoneTasks(newArray.length - leftTasks.length)
  }

  return (
    <>
      <Header/>
      <TaskInput handleNewTask={createNewTask}/>

      <div className='tasksArea'>
        <header>
          <p className='createdTasks'>Tarefas criadas <span>{tasks.length}</span></p>
          <p className='doneTasks'>Concluídas <span>{doneTasks} de {tasks.length}</span></p>
        </header>

        <div className='tasksList'>
          {tasks.length > 0 ?           
            tasks.map(task => {
              return (
                <Task 
                key={task.content}
                allTasks={tasks}
                task={task}
                deleteTask={deleteTask}
                setDoneTasks={setDoneTasks}
                doneTasks={doneTasks}
                />
              )
            })
            :
            <div className='warningEmpty'>
              <img src={clipboard}/>
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default App
