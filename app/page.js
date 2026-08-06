'use client'

import Direction from '@/components/direction'
import Distance from '@/components/distance'
import Elevation from '@/components/elevation'
import Speed from '@/components/speed'
import Wrapper from '@/components/wrapper'
import useMeter from '@/hooks/use-meter'
import usePosition from '@/hooks/use-position'

export default function Home() {
    const { position } = usePosition()
    const { meterRef, recording, distanceTraveled } = useMeter(position)

    return (
        <Wrapper ref={ meterRef }>
            <Distance recording={ recording } distanceTraveled={ distanceTraveled } />
            <Elevation position={ position } />
            <Speed position={ position } />
            <Direction position={ position } />
        </Wrapper>
    )
}
