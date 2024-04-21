'use client'

import { useEffect, useRef, useState } from 'react'
import distance from 'gps-distance'
import { getRealTimePosition } from './getter'
import styles from './styles.module.css'

function MeterEngine() {
    const containerRef = useRef()

    const [started, setStart] = useState(false)
    const [positionRecords, setPositionRecords] = useState([])
    const [distanceTraveled, setDistanceTraveled] = useState(0)

    const toggleEngine = () => setStart(!started)

    useEffect(() => {
        if (started) getRealTimePosition(setPositionRecords)
        
        if (!started) {
            setPositionRecords([])
            setDistanceTraveled(0)
        }
    }, [started])

    useEffect(() => {
        if (positionRecords.length > 2) {
            const calculatedDistance = distance(positionRecords)
            setDistanceTraveled(calculatedDistance)
        }
    }, [positionRecords])

    return (
        <div ref={ containerRef } className={ styles.container } onClick={ toggleEngine }>
            <p>{ distanceTraveled } km</p>
        </div>
    )
}

export default MeterEngine
