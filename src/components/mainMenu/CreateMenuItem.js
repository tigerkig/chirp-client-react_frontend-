import React from 'react'

const CreateMenuItem = ({ Svg , heading}) => {
    return (
        <div className='flex items-center gap-2 cursor-pointer rounded-lg p-2 hover:bg-active dark:hover:bg-dark_primary'>
            <div className='w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center primary-circle-svg'>
                <Svg />
            </div>
            <div>
                <p className='text-dark dark:text-gray-200'>
                    {heading}
                </p>
            </div>
        </div>
    )
}

export default CreateMenuItem