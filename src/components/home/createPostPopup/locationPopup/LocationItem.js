import React from 'react'
import { LocationFillSquare } from '../../../../svgs'

const LocationItem = ({ location }) => {
    return (
        <div className='flex items-center gap-3 rounded-full py-2 px-3 hover:bg-light dark:hover:bg-dark_secondary cursor-pointer'>
            <div className='location-fill-square'>
                <LocationFillSquare />
            </div>
            <div className='flex flex-col'>
                <p className='text-sm text-black dark:text-gray-200 font-semibold capitalize'>             
                    {location?.name}
                </p>
                <span className='text-[10px] text-secondary_light'>
                    {location?.description}
                </span>
            </div>
        </div>
    )
}

export default LocationItem