import React from 'react'

const SocialMenuItem = ({ url , Svg , heading , desc}) => {
    return (
        <div className='flex gap-2 cursor-pointer rounded-lg p-1 hover:bg-active dark:hover:bg-dark_primary'>
            <div className='w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center primary-circle-svg'>
                <Svg />
            </div>
            <div className='text-[11px] text-secondary_light w-[80%] '>
                <p className='text-sm font-medium text-secondary dark:text-gray-200'>
                    {heading}
                </p>
                <span>
                    {desc}
                </span>
            </div>
        </div>
    )
}

export default SocialMenuItem