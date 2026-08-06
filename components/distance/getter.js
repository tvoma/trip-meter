import styles from './styles.module.css'

export const formatDistance = distance => {
    if (distance < 1) {
        const meters = Math.round(distance * 1000)
        return `${meters} m`
    }

    return `${distance.toFixed(1)} km`
}

export const getIndicatorClassNames = recording => {
    if (recording)
        return [styles.indicator, styles.recording].join(' ')

    return styles.indicator
}
