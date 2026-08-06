import styles from './styles.module.css'

export default function Elevation({ position }) {
    return (
        <div className={ styles.container }>
            <p className={ styles.elevation }>Elevation : { position.elevation } m</p>
        </div>
    )
}
