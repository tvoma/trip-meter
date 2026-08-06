import { useEffect, useState } from 'react'
import { getRealTimePosition } from './getter'

export default function usePosition() {
    const [position, setPosition] = useState({ coordinates: [0, 0], elevation: 0, speed: 0, direction: 0 })
    
    useEffect(() => {
        const id = getRealTimePosition(setPosition)
        
        return () => {
            navigator.geolocation.clearWatch(id)
        }
    }, [])

    return { position }
}
