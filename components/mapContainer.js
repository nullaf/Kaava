import React from 'react'
import dynamic from 'next/dynamic'

const MapContainer = () => {
    const FullMap = React.useMemo(() => dynamic(
        () => import('/mapComponent'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])
    return <FullMap />
}

export default MapContainer
