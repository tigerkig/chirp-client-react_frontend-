import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Comment, DotsMenu, Like, Share } from '../../../svgs'

const WatchItem = ({ post }) => {
    const [showMoreText , setShowMoreText] = useState(false);
    const [showLessBtn , setShowLessBtn] = useState(false);
    const [showMoreBtn , setShowMoreBtn] = useState(true);

    const handleSeeMoreClick = () => {
        setShowMoreText(true)
        setShowMoreBtn(false);
        setShowLessBtn(true);
    }

    const handleShowLessClick = () => {
        setShowMoreText(false);
        setShowMoreBtn(true);
        setShowLessBtn(false);
    }


    return (
        <div className='post-container'>
        <div className='post w-full h-auto bg-pure dark:bg-dark_secondary rounded-md shadow-sm p-4 flex flex-col gap-4'>
            <div className='post-header flex items-center justify-between'>
                <div className='flex gap-2 text-sm '>
                    <div className="w-[40px] h-[40px] rounded-full">
                        <img src='/users/user-1.jpg' alt='Umair'  className='w-full h-full object-cover rounded-full'/>
                    </div>
                    <Link to='/profile'>
                        <div className='text-dark dark:text-gray-200 font-medium'>
                            <div className='flex items-center gap-2'>
                                <p>Umair Ahmad</p>
                                <p className='text-primary dark:text-rose-600 cursor-pointer'>
                                    Follow
                                </p>
                            </div>
                            <span className='text-[11px] text-secondary_light'>3 hours ago</span>
                        </div>
                    </Link>
                </div>
                <div className=''>
                    <div className="small-svg-2">
                        <DotsMenu />
                    </div>
                </div>
            </div>
            {
                post?.text.length > 0 && 
                <div className='post-text text-[13px]  sm:text-sm text-secondary dark:text-gray-200'>
                   {
                        post?.text?.length > 250 
                        ?
                        <>
                            <span>{post?.text?.slice(0,250)}</span>
                            {
                                showMoreBtn && 
                                <>
                                    <span>...</span>
                                    <span onClick={handleSeeMoreClick} 
                                    className='text-primary font-medium cursor-pointer dark:text-rose-600'> 
                                       &nbsp; See More
                                    </span>                                    
                                </>
                            }
                            {
                                showMoreText && <span> {post?.text?.slice(250)}</span>
                            }
                            {
                                showLessBtn && 
                                <span onClick={handleShowLessClick} 
                                className='text-primary dark:text-rose-600 font-medium cursor-pointer'>
                                    &nbsp; Show Less
                                </span>
                            }
                        </>
                        : 
                        <>
                            <span>{post?.text}</span>
                        </>
                   }
                </div>
            }
            {
                <div className='h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-full relative'>
                    <img 
                    src='/tours/tour-6-1.jpg' 
                    alt='tour' 
                    className='w-full h-full object-cover'
                    />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] cursor-pointer'>
                        <img src='/svgs/play.svg' alt='Play' className='w-full h-full'/>
                    </div>
                </div>
            }

            <div className="post-footer w-full flex items-center justify-between  gap-2 sm:gap-4 mt-4">
                <div className='flex items-center justify-center text-dark text-sm gap-3 rounded-full flex-1 dark:text-gray-200 '>
                    <div className="small-svg-2 bg-primary p-2 sm:py-3 sm:px-3 rounded-full">
                        <Like color='#fff'/>
                    </div>
                    <span >
                        {post?.likes} Likes
                    </span>
                </div>
                <div className='flex items-center justify-center text-dark text-sm gap-3  rounded-full flex-1-5 cursor-pointer dark:text-gray-200'>
                    <div className="small-svg-2">
                        <Comment />
                    </div>
                    <span>
                        {post?.comments} Comments
                    </span>
                </div>
                <div className='flex items-center justify-center text-dark text-sm gap-3 rounded-full flex-1 dark:text-gray-200'>
                    <div className="small-svg-2">
                        <Share />
                    </div>
                    <span>
                        Share
                    </span>
                </div>
                
            </div>
        </div>
       
    </div>
    )
}

export default WatchItem