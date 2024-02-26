import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface Task {
    id: number;
    content: string;
    done: boolean;
}

interface TaskProps {
    task: Task;
    allTasks: Task[];
    deleteTask: (task: string) => void;
    setDoneTasks: (n: number) => void
    doneTasks: number;
}

export function Task(props: TaskProps) {

    return (
        <div className={styles.task}>
            <label className={styles.container}>
                <input 
                    type="checkbox" 
                    onClick={(e) => {
                        if (e.target.checked) {
                            props.task.done = true

                            if (props.task.done) {
                                e.target.parentNode.parentNode.querySelector('p').classList.toggle('taskDone')
                            }
                        } else {
                            props.task.done = false

                            if (!props.task.done) {
                                e.target.parentNode.parentNode.querySelector('p').classList.toggle('taskDone')
                            } 
                        }

                        const doneTasks = props.allTasks.filter(onetask => {
                            return onetask.done == true
                        })

                        props.setDoneTasks(doneTasks.length)
                    }}
                />
                <span className={styles.checkmark}></span>
            </label>
            <p>{props.task.content}</p>
            <Trash 
                className={styles.trashIcon} 
                id='deleteButton'
                size={24}
                onClick={(e) => {
                    if (e.target.id == 'deleteButton'){
                        props.deleteTask(e.target.parentNode.querySelector('p').textContent)
                    } else {
                        props.deleteTask(e.target.parentNode.parentNode.parentNode.querySelector('p').textContent)
                    }
            }}
            />
        </div>
    )
}