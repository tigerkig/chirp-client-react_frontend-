import React from 'react'

const FeelingItem = ({ feeling }) => {
    return (
        <div className='flex items-center gap-4 text-secondary_light dark:text-gray-200 rounded-full p-2 hover:bg-light dark:hover:bg-dark_secondary cursor-pointer'>
            <div className='w-[40px] h-[40px] bg-light dark:bg-dark_secondary flex items-center justify-center rounded-full text-2xl'>
                {feeling?.emoji}
            </div>
            <p >{feeling?.title}</p>
        </div>
    )
}

export default FeelingItem