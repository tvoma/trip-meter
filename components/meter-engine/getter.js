const getRealTimePosition = setPositionRecords => {
    const geo = navigator.geolocation
    const options = { enableHighAccuracy: true }

    const onPositionSuccess = position => {
        const coordinates = [position.coords.latitude, position.coords.longitude]

        setPositionRecords(current => [...current, coordinates])
    }

    const onPositionError = () => console.error('Lost signal')

    geo.watchPosition(onPositionSuccess, onPositionError, options)
}

export { getRealTimePosition }
