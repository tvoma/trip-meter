import { PiMountainsBold } from 'react-icons/pi'
import styles from './styles.module.css'

export default function Elevation({ position }) {
    const elevation = position.elevation.toFixed(0)

    return (
        <div className={ styles.container }>
            <p className={ styles.elevation }>
                <PiMountainsBold />
                <span>{ elevation } m</span>
            </p>
        </div>
    )
}
