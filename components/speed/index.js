import { PiSpeedometerBold } from 'react-icons/pi'
import styles from './styles.module.css'

export default function Speed({ position }) {
    const speedInKm = (position.speed * 3.6).toFixed(0)
    
    return (
        <div className={ styles.container }>
            <p className={ styles.speed }>
                <PiSpeedometerBold />
                <span>{ speedInKm } km/h</span>
            </p>
        </div>
    )
}
