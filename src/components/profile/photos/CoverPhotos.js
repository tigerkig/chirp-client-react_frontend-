import React from 'react'

const CoverPhotos = ({ images }) => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 '>
        {
            images?.slice(12,32).map((image , i) => (
                <img src={image} alt="Profile gallery" key={i} className='h-[200px]
                rounded-lg object-cover' />
            ))
        }
    </div>
    )
}

export default CoverPhotos