import React from 'react'
import { useSelector } from 'react-redux';
import { userData } from '../../../data/User';
import { Comment, DotsMenu, Edit, PlusPrimary } from '../../../svgs'

const ProfilePicture = () => {
    const { user : { user } } = useSelector(state => state.auth);

    return (
        <div className='profile-picture w-full flex items-center justify-between relative '>
            <div className='profile-picture-left flex items-center gap-4'>
                <div 
                className='w-[120px] h-[120px] sm:w-[90px] sm:h-[90px] rounded-full border-4 border-pure  absolute top-[-4rem] sm:top-[-3rem] left-4 shadow-2'
                >
                    <img 
                    // src='/users/user-1.jpg' 
                    src={user?.profileImage || '/users/user-1.jpg'} 
                    alt='User' 
                    className='w-full h-full rounded-full'
                    />
                </div>
                {
                    user 
                    ? 
                        <div className='ml-[120px]  sm:mt-0 text-center md:text-left flex flex-col gap-2'>
                           <div className='flex flex-col gap-1'>
                                <h3 className='text-black dark:text-light font-semibold text-xl capitalize'>
                                    {user?.firstName + " " + user?.lastName}
                                </h3>
                                <p className='text-xs dark:text-rose-600 text-primary font-medium'>
                                    4k Friends
                                </p>
                           </div>
                           <div className='relative flex items-center'>
                                {
                                    userData.slice(1,7).map((user, i) => (
                                        <div className='w-[35px] h-[35px] rounded-full border-2 border-white  z-20 cursor-pointer'
                                        style={{
                                            marginLeft : `${i === 0 ? '' : '-6px'}`,
                                            zIndex : 10 - i
                                        }}>
                                            <img src={user?.image} className='w-full h-full rounded-full' />
                                        </div>
                                    ))
                                }
                                <div className='w-[35px] h-[35px] rounded-full border-2 border-white cursor-pointer flex items-center justify-center bg-secondary text-pure -ml-1.5'>
                                    <p className='translate-y-[-4px]'>...</p>
                                </div>
                   
                            </div>
                        </div>
                    : 
                        <div className='ml-[120px]  sm:mt-0 text-center md:text-left'>
                            <h3 className='text-black font-semibold text-xl capitalize'>
                                Umair Ahmad
                            </h3>
                            <p className='text-[10px] text-secondary_light '>
                                ua071567@gmail.com
                            </p>
                        </div>
                }
            </div>
            {
                user 
                ? 
                    <div className='flex items-center gap-4'>
                        <div>
                            <button className='flex items-center gap-2 bg-pure dark:bg-dark_primary  rounded-md py-2 px-4 border-2 border-primary dark:border-gray-400 hover:bg-light dark:hover:bg-dark_secondary'>
                                <div className="small-svg-2 plus">
                                    <PlusPrimary />
                                </div>
                                <span className='text-primary font-semibold dark:text-gray-200 '>
                                    Add Story
                                </span>
                            </button>
                        </div>
                        <div>
                            <button className='flex items-center gap-2 bg-primary rounded-md py-2 px-4 border-2 border-primary hover:bg-primaryHover '>
                                <div className="small-svg-2">
                                    <Edit />
                                </div>
                                <span className='text-pure font-semibold '>
                                    Edit Profile
                                </span>
                            </button>
                        </div>
                    </div>
                : 
                <div className='profile-picture-right flex items-center gap-4 '>
                    <div>
                        <button className="btn-primary">
                            Add Friend
                        </button>
                    </div>
                    <div className='small-svg-2 rounded-md bg-active py-2 px-4 cursor-pointer flex items-center justify-center'>
                        <Comment />
                    </div>
                    <div className="small-svg-2 rounded-md bg-active py-2 px-4 cursor-pointer flex items-center justify-center">
                        <DotsMenu />
                    </div>
                </div>
            }
        </div>
    )
}

export default ProfilePicture