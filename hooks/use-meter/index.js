import { useCallback, useEffect, useRef, useState } from 'react'
import { DEFAULT_DISTANCE, MIN_NBR_RECORDS } from './constant'
import { getDistance, getRealTimePosition } from './getter'

export default function useMeter() {
    const meterRef = useRef()
    const [recording, setRecording] = useState(false)
    const [positionRecords, setPositionRecords] = useState([])
    const [distanceTraveled, setDistanceTraveled] = useState(DEFAULT_DISTANCE)

    const toggleRecording = useCallback(() => {
        console.log('recording', recording)
        setRecording(!recording)
    }, [recording])

    const reset = watchPositionId => {
        setPositionRecords([])
        setDistanceTraveled(DEFAULT_DISTANCE)
        navigator.geolocation.clearWatch(watchPositionId)
    }

    useEffect(() => {
        const meter = meterRef.current

        if (meter) {
            meter.addEventListener('click', toggleRecording)
        }

        return () => {
            if (meter) {
                meter.removeEventListener('click', toggleRecording)
            }
        }
    }, [meterRef, recording, toggleRecording])

    useEffect(() => {
        let watchId

        if (recording)
            watchId = getRealTimePosition(setPositionRecords)
        
        if (!recording)
            reset(watchId)

        return () => reset(watchId)
    }, [recording])

    useEffect(() => {
        if (positionRecords.length > MIN_NBR_RECORDS)
            getDistance(positionRecords, setDistanceTraveled)
    }, [positionRecords])

    return { meterRef, recording, distanceTraveled }
}
