import React from 'react'

const Cover = ({ coverImage}) => {
    return (
        <div className='w-full h-[250px] sm:rounded-md '>
            <img 
            src={coverImage} 
            alt='Cover' 
            className='w-full h-full object-cover sm:rounded-md'
            />
        </div>
    )
}

export default Cover