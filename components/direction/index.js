import { GrWaypoint } from 'react-icons/gr'
import styles from './styles.module.css'

export default function Direction({ position }) {
    const degrees = position.direction.toFixed(0)

    function degreesToCardinal(degrees) {
        if (degrees === null || degrees === undefined) return null;
      
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const normalized = ((degrees % 360) + 360) % 360; // gère les valeurs négatives
        const index = Math.round(normalized / 45) % 8;
      
        return directions[index];
    }

    return (
        <div className={ styles.container }>
            <p className={ styles.direction }>
                <GrWaypoint />
                <span>{ degrees }° N (towards {degreesToCardinal(degrees)})</span>
            </p>
            <p></p>
        </div>
    )
}
