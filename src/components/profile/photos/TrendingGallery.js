import React from 'react'
import { imagesData } from '../../../data/Images'

const TrendingGallery = () => {
    return (
        <div className='bg-pure dark:bg-dark_secondary rounded-lg shadow-2 sm:p-4 p-2 flex flex-col gap-4'>
            <div className='flex items-center justify-between text-sm text-dark dark:text-light'>
                <span>Trending Photos</span>
                <span className='text-primary cursor-pointer dark:text-rose-600'>See all</span>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                {
                    imagesData.slice(0,8).map((image , i) => (
                        <img src={image} key={i} alt='Trendings Gallery' className='rounded-md'/> 
                    ))
                }   
            </div>
        </div>
    )
}

export default TrendingGallery