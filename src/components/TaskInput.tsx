import { useState } from 'react';
import styles from './TaskInput.module.css'
import { PlusCircle } from 'phosphor-react'

interface Task {
    id: number;
    content: string;
    done: boolean;
}

interface TaskInputProps {
    handleNewTask: (task: Task) => void;
    tasks: Task[];
}

export function TaskInput({ handleNewTask, tasks }: TaskInputProps) {

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
                onKeyDown={(key) => {
                    if (key.code == 'Enter') {
                        if (taskContent != '') {
                            handleNewTask({id: id, content: taskContent, done: false})
                            setId((state) => {
                                return state + 1
                            })
                        }
                        setTaskContent('')
                    }
                }}
            />
            <button 
                className={styles.newTaskButton}
                onClick={() => {
                    if (taskContent != '') {
                        const createdTask = tasks.filter(task => {
                            if (task.content == taskContent) {
                                return task
                            }
                        })

                        if (createdTask[0]?.content == taskContent) {
                            return
                        } else {
                            handleNewTask({id: id, content: taskContent, done: false})
                            setId((state) => {
                                return state + 1
                            })
                        }
                    }
                    setTaskContent('')
                }}
                >Criar<PlusCircle size={16}/>
            </button>
        </div>
    )
}