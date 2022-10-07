import React from 'react'
import FriendItem from '../about/FriendItem'
import { friendsData } from '../about/friendsData'
import FriendsTabHader from './FriendsTabHader'

const FriendsTab = () => {
    return (
        <div>
            <div className='w-full flex flex-col gap-12'>
                <FriendsTabHader />

                <div className='flex flex-col gap-4 bg-pure dark:bg-dark_secondary rounded-lg  shadow-2 sm:p-4 p-3 '>
                    <span className='text-primary dark:text-rose-600 font-semibold'>Friends</span>
                    <div className='w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 sm:ml-8 py-2'>
                        {
                            friendsData?.map((friend , i ) => (
                                <FriendItem friend={friend} key={i} />
                            ))
                        }
                    </div>
                </div>
                
                <div className='flex flex-col gap-4 bg-pure dark:bg-dark_secondary rounded-lg  shadow-2 sm:p-4 p-2'>
                    <span className='text-primary dark:text-rose-600 font-semibold'>Friend Requests</span>
                    <div className='w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 sm:ml-8 py-2'>
                        {
                            friendsData?.map((friend , i ) => (
                                <FriendItem friend={friend} key={i} />
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col gap-4 bg-pure dark:bg-dark_secondary rounded-lg  shadow-2 sm:p-4 p-2'>
                    <span className='text-primary dark:text-rose-600 font-semibold'>Suggestions</span>
                    <div className='w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 sm:ml-8 py-2'>
                        {
                            friendsData?.map((friend , i ) => (
                                <FriendItem friend={friend} key={i} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsTab