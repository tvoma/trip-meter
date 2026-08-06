import styles from './styles.module.css'

export default function Direction({ position }) {
    return (
        <div className={ styles.container }>
            <p className={ styles.direction }>Direction : { position.direction } degree from north</p>
        </div>
    )
}
