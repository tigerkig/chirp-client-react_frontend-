import React from 'react'
import { useCreateEventContext } from '../../../../context/createEventContext'

const ClassDetails = () => {
    const { setCurrentEventView } = useCreateEventContext();

    return (
        <div className='flex flex-col gap-4'>
            <h3 className='text-primary font-medium dark:text-gray-200'>
                Additional Class Details
            </h3>
            <div>
                <input 
                type="text" 
                placeholder='What to expect'
                className='border border-gray-300 focus:outline-primary p-2.5 text-dark placeholder:text-secondary_light rounded-md w-full dark:bg-dark_primary dark:border-gray-500 dark:text-gray-200 dark:outline-none'
                 />
            </div>
            <div>
                <input 
                type="text" 
                placeholder='Category'
                className='border border-gray-300 focus:outline-primary p-2.5 text-dark placeholder:text-secondary_light rounded-md w-full dark:bg-dark_primary dark:border-gray-500 dark:text-gray-200 dark:outline-none'
                 />
            </div>
            <div>
                <input 
                type="text" 
                placeholder='Requirements'
                className='border border-gray-300 focus:outline-primary p-2.5 text-dark placeholder:text-secondary_light rounded-md w-full dark:bg-dark_primary dark:border-gray-500 dark:text-gray-200 dark:outline-none'
                 />
            </div>
            <div onClick={() => {
                setCurrentEventView('joinClass')
            }}>
                <button className="btn-primary w-full" >
                    Next
                </button>
            </div>
        </div>
    )
}

export default ClassDetails