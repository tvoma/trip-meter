import styles from './styles.module.css'

export default function Speed({ position }) {
    return (
        <div className={ styles.container }>
            <p className={ styles.speed }>Speed : { position.speed } m/s</p>
        </div>
    )
}
