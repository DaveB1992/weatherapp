import React from 'react'

const LocationDetails = () => {
    const {city, country} = props
    return <h1>{`${city}, ${country}`}</h1>
}

export default LocationDetails