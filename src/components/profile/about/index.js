import React from 'react'
import FriendItem from './FriendItem';
import { friendsData } from './friendsData';

const AboutProfile = () => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='w-full flex gap-4 flex-col  sm:flex-row'>
                <div className='flex-1 bg-pure dark:bg-dark_secondary sm:p-4 p-2 rounded-md shadow-2 flex flex-col gap-2.5'>
                    <p className='text-dark dark:text-light font-semibold text-base sm:text-lg'>About</p>
                    <ul className='flex flex-col gap-3 text-sm text-secondary dark:text-gray-200'>
                        <li className='hover:text-primary dark:hover:text-rose-600'>
                            Overview
                        </li>
                        <li className='hover:text-primary dark:hover:text-rose-600'>
                            Work and education
                        </li>
                        <li className='hover:text-primary dark:hover:text-rose-600'>
                            Places lived
                        </li>
                        <li className='hover:text-primary dark:hover:text-rose-600'>
                            Details about you
                        </li>
                    </ul>
                </div>
                <div className='flex-2 bg-pure dark:bg-dark_secondary sm:p-4 p-2 rounded-md shadow-2 '>
                    <ul className='flex flex-col gap-3 text-sm text-secondary dark:text-gray-200'>
                        <li>No workplaces to show </li>
                        <li>No schools/universities to show</li>
                        <li>Lives in Mailsi, Punjab, Pakistan</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-4 bg-pure dark:bg-dark_secondary rounded-md shadow-2 sm:p-4 p-2'>
                <span className='text-primary font-semibold dark:text-light'>Friends</span>
                <div className='w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                    {
                        friendsData?.map((friend , i ) => (
                            <FriendItem friend={friend} key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutProfile;