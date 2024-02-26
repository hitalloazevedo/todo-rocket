import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    content: string;
    deleteTask: (task: string) => void;
}

export function Task(props: TaskProps) {

    return (
        <div className={styles.task}>
            <label className={styles.container}>
                <input 
                    type="checkbox" 
                    onClick={(e) => {
                        if (e.target.checked) {
                            e.target.parentNode.parentNode.querySelector('p').classList.toggle('taskDone')
                        } else {
                            e.target.parentNode.parentNode.querySelector('p').classList.toggle('taskDone')
                        }
                    }}
                />
                <span className={styles.checkmark}></span>
            </label>
            <p>{props.content}</p>
            <Trash 
                className={styles.trashIcon} 
                size={24}
                onClick={(e) => {
                    if (e.target.classList.contains('_trashIcon_if5gv_49')){
                        props.deleteTask(e.target.parentNode.querySelector('p').textContent)
                    } else {
                        props.deleteTask(e.target.parentNode.parentNode.parentNode.querySelector('p').textContent)
                    }
            }}
            />
        </div>
    )
}