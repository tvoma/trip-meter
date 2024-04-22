'use client'

import { useEffect, useRef, useState } from 'react'
import { getRealTimePosition, getDistance, getIndicatorClassNames } from './getter'
import { DEFAULT_DISTANCE, MIN_NBR_RECORDS } from './constant'
import styles from './styles.module.css'

function MeterEngine() {
    const containerRef = useRef()

    const [started, setStart] = useState(false)
    const [positionRecords, setPositionRecords] = useState([])
    const [distanceTraveled, setDistanceTraveled] = useState(DEFAULT_DISTANCE)

    const toggleEngine = () => setStart(!started)

    const reset = watchPositionId => {
        setPositionRecords([])
        setDistanceTraveled(DEFAULT_DISTANCE)
        navigator.geolocation.clearWatch(watchPositionId)
    }

    useEffect(() => {
        let watchId

        if (started)
            watchId = getRealTimePosition(setPositionRecords)
        
        if (!started)
            reset(watchId)

        return () => reset(watchId)
    }, [started])

    useEffect(() => {
        if (positionRecords.length > MIN_NBR_RECORDS)
            getDistance(positionRecords, setDistanceTraveled)
    }, [positionRecords])

    return (
        <div ref={ containerRef } className={ styles.container } onClick={ toggleEngine }>
            <p>
                <span className={ getIndicatorClassNames(started) }></span> { distanceTraveled } km
            </p>
        </div>
    )
}

export default MeterEngine
