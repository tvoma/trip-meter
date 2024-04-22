import distance from 'gps-distance'
import styles from './styles.module.css'

const getRealTimePosition = setPositionRecords => {
    const geo = navigator.geolocation
    const options = { enableHighAccuracy: true, maximumAge: 0 }

    const onPositionSuccess = position => {
        const coordinates = [position.coords.latitude, position.coords.longitude]

        setPositionRecords(current => [...current, coordinates])
    }

    const onPositionError = () => console.error('Lost signal')

    const watchId = geo.watchPosition(onPositionSuccess, onPositionError, options)

    return watchId
}

const getDistance = (positionRecords, setDistanceTraveled) => {
    const calculatedDistance = distance(positionRecords)
    const formattedDistance = calculatedDistance.toFixed(3)

    setDistanceTraveled(formattedDistance)
}

const getIndicatorClassNames = started => {
    if (started)
        return [styles.indicator, styles.started].join(' ')

    return styles.indicator
}

export { getRealTimePosition, getDistance, getIndicatorClassNames }
