import React from 'react'

const Description = () => {


    return (
        <div className='flex flex-col gap-4 pt-4'>
            <h3 className='text-lg text-primary font-semibold dark:text-light'>
                Description
            </h3>
            <div>
                <textarea  
                placeholder='Add Description'   
                className='focus:outline-primary placeholder:text-secondary_light resize-none border border-gray-300 rounded-lg p-3 w-full h-[150px] dark:bg-dark_primary dark:text-light dark:border-gray-500 dark:outline-none'
                />
            </div>
            <div>
                <button className="btn-primary w-full">
                    Create 
                </button>
            </div>
        </div>
    )
}

export default Description