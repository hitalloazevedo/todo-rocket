import { useState } from 'react';
import styles from './TaskInput.module.css'
import { PlusCircle } from 'phosphor-react'

interface Task {
    id: number;
    content: string;
}

interface Handler {
    handleNewTask: (task: Task) => void;
}

export function TaskInput({ handleNewTask }: Handler) {

    const [taskContent, setTaskContent] = useState('')
    const [id, setId] = useState(0)

    return(
        <div className={styles.newTask}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa' 
                value={taskContent}
                onChange={(e) => {
                    setTaskContent(e.target.value)
                }}
            />
            <button 
                className={styles.newTaskButton}
                onClick={() => {
                    if (taskContent != '') {
                        handleNewTask({id: id, content: taskContent})
                        setId((state) => {
                            return state + 1
                        })
                    }
                    setTaskContent('')
                }}
                >Criar<PlusCircle size={16}/>
            </button>
        </div>
    )
}