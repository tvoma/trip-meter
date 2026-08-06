import distance from 'gps-distance'

export const getRealTimePosition = setPositionRecords => {
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

export const getDistance = (positionRecords, setDistanceTraveled) => {
    const calculatedDistance = distance(positionRecords)

    setDistanceTraveled(calculatedDistance)
}
