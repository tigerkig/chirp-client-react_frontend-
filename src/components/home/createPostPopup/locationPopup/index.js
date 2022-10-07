import React from 'react'
import { Search } from '../../../../svgs'
import PopupHeader from '../PopupHeader'
import { locationsData } from './locationData'
import LocationItem from './LocationItem'

const LocationPopup = () => {
    return (
        <div  className="flex flex-col gap-3 ">
            <PopupHeader headerText="Search for location" />
            <form>
                <div className="w-full py-2">
                    <div className="border border-gray-200 dark:border-gray-400 bg-light dark:bg-dark_secondary rounded-full py-2 px-3 text-base flex items-center w-full gap-3 filter-svg">
                        <Search />
                        <input 
                        className="bg-transparent border-none outline-none dark:text-light"
                        type="text" 
                        placeholder="Search your feelings" 
                        />
                    </div>
                </div>
            </form>
            <div className='addScroll flex flex-col gap-1 w-full h-[300px] overflow-auto'>
                {
                    locationsData?.map((location , i) => (
                        <LocationItem key={i} location={location} />
                    ))
                }
            </div>
           
        </div>
    )
}

export default LocationPopup