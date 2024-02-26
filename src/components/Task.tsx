import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export function Task() {
    return (
        <div className={styles.task}>
            <label className={styles.container}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
            </label>
            <p>content Lorem ipsum dolor sit amet consecteturDeserunt accusamus impedit non neo nostrum, odio debitis impedit nam explicabo vero adipisci eos quae fugit inventore.
            </p>
            <Trash className={styles.trashIcon} size={24}/>
        </div>
    )
}