import React from 'react'
import { usePageContext } from '../../../context/pageContext'

const Cover = () => {
    const { pageDetails } = usePageContext()
    return (
        <div className='w-full h-[300px] rounded-md '>
            <img 
            src={`https://chirp.shopziaa.com/${pageDetails?.pageCoverImage}`} 
            alt='Cover' 
            className='w-full h-full object-cover rounded-md'
            />
        </div>
    )
}

export default Cover