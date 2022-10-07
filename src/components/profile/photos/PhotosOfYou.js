import React from 'react'

const PhotosOfYou = ({ images }) => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2'>
            {
                images?.slice(0,20).map((image , i) => (
                    <img src={image} alt="Profile gallery" key={i} className='h-[200px] rounded-lg object-cover' />
                ))
            }
        </div>
    )
}

export default PhotosOfYou