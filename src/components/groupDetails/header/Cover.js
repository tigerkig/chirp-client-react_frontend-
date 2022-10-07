import React from 'react'
import { useGroupContext } from '../../../context/createGroupContext'

const Cover = () => {
    const { groupDetails } = useGroupContext();

    return (
        <div className='w-full h-[300px] rounded-md '>
            <img 
            src={`https://chirp.shopziaa.com/${groupDetails?.groupCoverImage}`} 
            alt='Cover' 
            className='w-full h-full object-cover rounded-md'
            />
        </div>
    )
}

export default Cover