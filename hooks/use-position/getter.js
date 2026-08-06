export const getRealTimePosition = setPosition => {
    const options = { enableHighAccuracy: true, maximumAge: 0 }

    const onPositionSuccess = position => {
        const coordinates = [position.coords.latitude, position.coords.longitude]
        const elevation = position.coords.altitude || 0
        const speed = position.coords.speed || 0
        const heading = position.coords.heading || 0

        setPosition(current => {
            const direction = heading ?? current.direction

            return { coordinates, elevation, speed, direction }
        })
    }

    const onPositionError = () => console.error('Lost signal')

    const watchId = navigator.geolocation.watchPosition(onPositionSuccess, onPositionError, options)

    return watchId
}
