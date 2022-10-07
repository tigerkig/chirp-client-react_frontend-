import React from 'react'
import { Link } from 'react-router-dom';

const PageItem = ({ page , user = false }) => {
    return (
        <div>
            <div className='w-full h-[220px] flex flex-col rounded-lg shadow-2'>
                <div className='w-full h-[60%]'>
                    <img src={`https://chirp.shopziaa.com/${page?.pageCoverImage}`} alt={page?.name} className='rounded-t-lg w-full h-full object-cover'/>
                </div>
                <div className='w-full h-[40%] bg-pure dark:bg-dark_secondary flex justify-between px-3 sm:px-4 pt-4 rounded-b-lg'>
                    <div className='relative'>
                        <div className="circle-img-large absolute -top-10 left-0">
                            <img src={`https://chirp.shopziaa.com/${page?.pageProfileImage}`} alt={page.name} className='rounded-lg w-[70px] h-[70px]' />
                        </div>
                        <div className='ml-[65px] sm:ml-[80px]'>
                            <Link to={`/pages/${page._id}`}>
                                <h3 className='font-semibold text-dark dark:text-gray-200 text-sm sm:text-base'>{page?.name}</h3>
                            </Link>
                            <p className='text-xs text-secondary_light'>{Math.floor(Math.random() * 1000)} Likes</p>
                        </div>
                    </div>
                    <div>
                        <button className="bg-primary  font-medium text-xs sm:text-sm py-2 3 sm:px-6 px-4 text-pure rounded-md hover:bg-primaryHover">
                            {user ? 'Invite' : 'Like Page'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default PageItem;