import React from 'react'
import { RightArrow } from '../../../../svgs'

const ActivityItem = ({ activity }) => {
    return (
        <div className='w-full flex items-center justify-between py-2 px-3 rounded-full cursor-pointer hover:bg-light dark:hover:bg-dark_secondary'>
            <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center bg-light dark:bg-dark_secondary rounded-full w-[35px] h-[35px] '>
                    <span>{activity?.emoji}</span>
                </div>
                <p className='dark:text-gray-200'>{activity?.title}</p>
            </div>
            <div className='small-svg'>
                <RightArrow />
            </div>
        </div>
    )
}

export default ActivityItem