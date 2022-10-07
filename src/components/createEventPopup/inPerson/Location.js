import React from 'react'
import { useCreateEventContext } from '../../../context/createEventContext'

const InPersonLocation = () => {
    const { setCurrentEventView } = useCreateEventContext();
    
    return (
        <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-semibold text-primary dark:text-light'>Location</h3>
            <div>
                <input 
                type="text"  
                placeholder='Choose a place'
                className='border border-gray-300 focus:outline-primary p-2.5 text-dark placeholder:text-secondary_light rounded-md w-full dark:bg-dark_primary dark:border-gray-500 dark:text-light dark:outline-none'
                />
            </div>
            <div className='mt-4'>
                <button className="btn-primary w-full" 
                onClick={() => {
                    setCurrentEventView('description')
                }}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default InPersonLocation