'use client'

import Direction from '@/components/direction'
import Distance from '@/components/distance'
import Elevation from '@/components/elevation'
import Settings from '@/components/settings'
import Speed from '@/components/speed'
import Wrapper from '@/components/wrapper'
import useMeter from '@/hooks/use-meter'
import usePosition from '@/hooks/use-position'
import useSettings from '@/hooks/use-settings'

export default function Home() {
    const { position } = usePosition()
    const { meterRef, recording, distanceTraveled } = useMeter(position)
    const { settings, handleSettingChange } = useSettings()

    return (
        <>
            <Settings values={ settings } onChange={ handleSettingChange } />
            <Wrapper ref={ meterRef }>
                <Distance recording={ recording } distanceTraveled={ distanceTraveled } />
                { settings.elevation && <Elevation position={ position } /> }
                { settings.speed && <Speed position={ position } /> }
                { settings.direction && <Direction position={ position } /> }
            </Wrapper>
        </>
    )
}
