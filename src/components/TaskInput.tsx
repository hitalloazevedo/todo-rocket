import styles from './TaskInput.module.css'
import { PlusCircle } from 'phosphor-react'

export function TaskInput() {
    return(
        <div className={styles.newTask}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button className={styles.newTaskButton}>Criar <PlusCircle size={16}/></button>
        </div>
    )
}