import React from 'react'
import { Friends, RightArrowPrimary  } from '../../../svgs'

const FriendsTabHader = () => {
    return (
        <div className='flex gap-4 sm:flex-row flex-col '>
            <div className='flex-1 bg-pure dark:bg-dark_secondary rounded-md sm:p-4 p-3 text-sm flex flex-col gap-4 shadow-2'>
                <span className='font-semibold text-black text-base sm:text-lg dark:text-light'>Friends</span>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center justify-between'>
                        <div 
                        className='flex items-center gap-3 text-sm hover:text-primaryHover cursor-pointer text-secondary_light dark:text-gray-200'
                        >
                            <div className="small-svg-2">
                                <Friends />
                            </div>  
                            
                            <span>Home</span>
                        </div>
                        <div className='small-svg-2'>
                            <RightArrowPrimary />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div 
                        className='flex items-center gap-3 text-sm hover:text-primaryHover cursor-pointer text-secondary_light dark:text-gray-200'
                        >
                            <div className="small-svg-2 ">
                                <Friends />
                            </div>
                            <span>Friend Requests</span>
                        </div>
                        <div className='small-svg-2'>
                            <RightArrowPrimary />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div 
                        className='flex items-center gap-3 text-sm hover:text-primaryHover cursor-pointer text-secondary_light dark:text-gray-200'
                        >
                            <div className="small-svg-2">
                                <Friends />
                            </div>
                            <span>Suggestions</span>
                        </div>
                        <div className='small-svg-2'>
                            <RightArrowPrimary />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div 
                        className='flex items-center gap-3 text-sm hover:text-primaryHover cursor-pointer text-secondary_light dark:text-gray-200'
                        >
                            <div className="small-svg-2">
                                <Friends />
                            </div>
                            <span>All Friends</span>
                        </div>
                        <div className='small-svg-2'>
                            <RightArrowPrimary />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div 
                        className='flex items-center gap-3 text-sm hover:text-primaryHover cursor-pointer text-secondary_light dark:text-gray-200 '
                        >
                            <div className="small-svg-2">
                                <Friends />
                            </div>
                            <span>Onlie Friends</span>
                        </div>
                        <div className='small-svg-2'>
                            <RightArrowPrimary />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-2 bg-pure dark:bg-dark_secondary rounded-md sm:p-4 p-2 text-sm flex flex-col gap-4 shadow-2'>
                <div className=' font-semibold text-primary dark:text-rose-600 border-b border-b-primary dark:border-b-rose-600 pb-2 w-fit text-base sm:text-lg'>
                    Following
                </div>
                <div className='addScroll flex flex-col gap-4 h-[160px] overflow-auto'>
                    <div className='flex items-center gap-3'>
                        <div className="circle-img">
                            <img src='/users/user-1.jpg' alt="User" />
                        </div>
                        <div>
                            <span className='text-[13px] font-semibodl text-black dark:text-gray-200'>
                                John Doe
                            </span>
                            <p className='text-secondary_light text-[10px]'>University of Calefornia Sanfransisco,USA</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className="circle-img">
                            <img src='/users/user-1.jpg' alt="User" />
                        </div>
                        <div>
                            <span className='text-[13px] font-semibodl text-black dark:text-gray-200'>
                                John Doe
                            </span>
                            <p className='text-secondary_light text-[10px]'>University of Calefornia Sanfransisco,USA</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className="circle-img">
                            <img src='/users/user-1.jpg' alt="User" />
                        </div>
                        <div>
                            <span className='text-[13px] font-semibodl text-black dark:text-gray-200'>
                                John Doe
                            </span>
                            <p className='text-secondary_light text-[10px]'>University of Calefornia Sanfransisco,USA</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className="circle-img">
                            <img src='/users/user-1.jpg' alt="User" />
                        </div>
                        <div>
                            <span className='text-[13px] font-semibodl text-black dark:text-gray-200'>
                                John Doe
                            </span>
                            <p className='text-secondary_light text-[10px]'>University of Calefornia Sanfransisco,USA</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className="circle-img">
                            <img src='/users/user-1.jpg' alt="User" />
                        </div>
                        <div>
                            <span className='text-[13px] font-semibodl text-black dark:text-gray-200'>
                                John Doe
                            </span>
                            <p className='text-secondary_light text-[10px]'>University of Calefornia Sanfransisco,USA</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className="circle-img">
                            <img src='/users/user-1.jpg' alt="User" />
                        </div>
                        <div>
                            <span className='text-[13px] font-semibodl text-black dark:text-gray-200'>
                                John Doe
                            </span>
                            <p className='text-secondary_light text-[10px]'>University of Calefornia Sanfransisco,USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsTabHader