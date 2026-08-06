import { useCallback, useEffect, useRef, useState } from 'react'
import { DEFAULT_DISTANCE, MIN_NBR_RECORDS } from './constant'
import { getDistance } from './getter'

export default function useMeter(position) {
    const meterRef = useRef()
    const [recording, setRecording] = useState(false)
    const [positionRecords, setPositionRecords] = useState([])
    const [distanceTraveled, setDistanceTraveled] = useState(DEFAULT_DISTANCE)

    const toggleRecording = useCallback(() => setRecording(!recording), [recording])

    const resetBeforeRecording = () => {
        setPositionRecords([])
        setDistanceTraveled(DEFAULT_DISTANCE)
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
        if (!recording) return
        setPositionRecords(current => [...current, position.coordinates])
    }, [position, recording])

    useEffect(() => {
        if (recording)
            resetBeforeRecording()
    }, [recording])

    useEffect(() => {
        if (positionRecords.length > MIN_NBR_RECORDS)
            getDistance(positionRecords, setDistanceTraveled)
    }, [positionRecords])

    return { meterRef, recording, distanceTraveled }
}
