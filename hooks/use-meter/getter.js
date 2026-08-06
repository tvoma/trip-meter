import distance from 'gps-distance'

export const getDistance = (positionRecords, setDistanceTraveled) => {
    const calculatedDistance = distance(positionRecords)

    setDistanceTraveled(calculatedDistance)
}
