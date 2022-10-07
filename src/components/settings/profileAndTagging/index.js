import React from 'react'

const ProfileAndTagging = () => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-dark dark:text-light font-semibold text-xl'>
                    Profile and tagging
                </h3>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Profile
                    </h5>
                    <div className='flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col '>
                            <p>Who can post on your profile?</p>
                            <span className='text-primary dark:text-rose-600'>
                                Friends
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                    <div className='flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col '>
                            <p>Who can see what other people post on your profile?</p>
                            <span className='text-primary dark:text-rose-600'>
                                Friends
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                    <div className='flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col '>
                            <p>Limit the audiance for posts you’ve shared with friends of friends or public?</p>
                            <span className='text-primary dark:text-rose-600'>
                            Limit Past Posts
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                    <div className='flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col '>
                            <p>Who can see the people, Pages and lets you follow?</p>
                            <span className='text-primary dark:text-rose-600'>
                            Public
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                </div>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Tagging
                    </h5>
                    <div className='flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col '>
                            <p>Who can post that you’re tagges in on your profile?</p>
                            <span className='text-primary dark:text-rose-600'>
                            Friends of friends
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                    <div className='flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col  '>
                            <p>When you're tagged in a post, who do you want to add to the audience of the post <br /> if they can't already see it?</p>
                            <span className='text-primary dark:text-rose-600'>
                                Friends
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600 '>
                            Edit
                        </button>
                    </div>
                </div>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        View
                    </h5>
                    <div className='text-sm text-secondary_light dark:text-gray-300'>
                        <p>Check what your profile looks like to others. Use "View as" to see what the public can see.</p>
                        <button className='text-primary'>View as</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAndTagging