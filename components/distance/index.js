'use client'

import { getIndicatorClassNames, formatDistance } from './getter'
import styles from './styles.module.css'

export default function Distance({ recording, distanceTraveled }) {
    return (
        <div className={ styles.container }>
            <p className={ getIndicatorClassNames(recording) }><span></span> { recording ? 'Recording...' : 'Tap to record' }</p>
            <p className={ styles.distance }>{ formatDistance(distanceTraveled) }</p>
        </div>
    )
}
