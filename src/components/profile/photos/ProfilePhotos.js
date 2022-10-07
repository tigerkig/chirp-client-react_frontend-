import React from 'react'

const ProfilePhotos = ({ images }) => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2'>
            {
                images?.slice(8,28).map((image , i) => (
                    <img src={image} alt="Profile gallery" key={i} className='h-[200px] rounded-lg object-cover' />
                ))
            }
        </div>
    )
}

export default ProfilePhotos