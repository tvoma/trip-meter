'use client'

import Distance from '@/components/distance'
import Wrapper from '@/components/wrapper'
import useMeter from '@/hooks/use-meter'

export default function Home() {
    const { meterRef, recording, distanceTraveled } = useMeter()

    return (
        <Wrapper ref={ meterRef }>
            <Distance recording={ recording } distanceTraveled={ distanceTraveled } />
        </Wrapper>
    )
}
