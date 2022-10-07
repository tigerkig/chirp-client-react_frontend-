import React from 'react'
import { Link } from 'react-router-dom'

const PopularGroupItem = ({ group , user  }) => {
    return (
        <div>
            <div className='w-full h-[220px] flex flex-col rounded-lg shadow-2'>
                <div className='w-full h-[60%]'>
                    {
                        group?._id 
                        ? 
                            <img src={`https://chirp.shopziaa.com/${group?.groupCoverImage}`} alt={group?.name} className='rounded-t-lg w-full h-full object-cover'/>
                        : 
                            <img src={`${group?.groupCoverImage}`} alt={group?.name} className='rounded-t-lg w-full h-full object-cover'/>
                    }
                </div>
                <div className='w-full h-[40%] bg-pure dark:bg-dark_secondary flex justify-between px-3 sm:px-4 pt-4 rounded-b-lg'>
                    <div className='relative'>
                        {/* <div className="circle-img-large absolute -top-10 left-0">
                            <img src={group.profile} alt={group.name} className='rounded-lg w-[70px] h-[70px]' />
                        </div> */}
                        <Link to={`/groups/${group?._id}`}>
                            <h3 className='font-semibold text-dark text-sm sm:text-base dark:text-gray-200'>{group?.name}</h3>
                            <p className='text-xs text-secondary_light'>{group?.members} members</p>
                        </Link>
                    </div>
                    <div>
                        <button className="bg-primary  font-medium text-xs sm:text-sm py-2 3 sm:px-6 px-4 text-pure rounded-md hover:bg-primaryHover">
                            {user ? 'Invite Friends' : 'Join Group'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default PopularGroupItem