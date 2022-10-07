import React from 'react'

const Privacy = () => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-dark dark:text-light font-semibold text-xl'>
                    Privacy
                </h3>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Privacy shortcuts
                    </h5>
                    <div className='flex flex-col gap-1 text-sm'>
                        <h6 className='font-semibold dark:text-gray-300'>Check a few important settings</h6>
                        <p className='text-sm text-secondary_light dark:text-gray-300'>Quickly review some important settings to make sure that you’re shairing with people you want.</p>
                    </div>
                    <div className='flex flex-col gap-1 text-sm'>
                        <h6 className='font-semibold dark:text-gray-300'>Manage your profile</h6>
                        <p className='text-sm text-secondary_light dark:text-gray-300'>Go to your profile to change your profile information privacy,such as who can see your date of birth or relationships.</p>
                    </div>
                </div>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Your activity
                    </h5>
                    <div className='text-sm flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col gap-1'>
                            <p>Who can see your future posts?</p>
                            <span className='text-primary dark:text-rose-600'>
                                Friends
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                    <div className='flex flex-col gap-1 text-secondary_light dark:text-gray-300 text-sm'>
                        <p>Review all your posts and things you’re tagged in</p>
                        <span className='text-primary dark:text-rose-600'>
                            Use Activity Log
                        </span>
                    </div>
                    <div className='flex flex-col gap-1 text-secondary_light dark:text-gray-300 text-sm'>
                        <p>Limit the audiance for posts you’ve shared with friends of friends or public?</p>
                        <span className='text-primary dark:text-rose-600'>
                        Limit Past Posts
                        </span>
                    </div>
                    <div className='text-sm flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col gap-1'>
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
                        How people can find and contact you
                    </h5>
                    <div className='text-sm flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col gap-1'>
                            <p>Who can send you friend request?</p>
                            <span className='text-primary dark:text-rose-600'>
                                Everyone
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                    <div className='text-sm flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col gap-1'>
                            <p>Who can see your friendlist?</p>
                            <span className='text-primary dark:text-rose-600'>
                                Public
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                    <div className='text-sm flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col gap-1'>
                            <p>Who can look you up using the email address you provided?</p>
                            <span className='text-primary dark:text-rose-600'>
                                Everyone
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                    <div className='text-sm flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col gap-1'>
                            <p>Who can look you up using the phone number you provided?</p>
                            <span className='text-primary dark:text-rose-600'>
                                Everyone
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                    <div className='text-sm flex items-center justify-between text-secondary_light dark:text-gray-300'>
                        <div className='flex flex-col gap-1'>
                            <p>Do you want search engines outside Chrip to link to your profile?</p>
                            <span className='text-primary dark:text-rose-600'>
                                Yes
                            </span>
                        </div>
                        <button className='text-primary dark:text-rose-600'>
                            Edit
                        </button>
                    </div>
                </div>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        How you get message requests
                    </h5>
                    <p className='text-sm text-secondary_light dark:text-gray-300'>Decide whether message requests go to your Chats list, your "Message requests" folder or whether to receive them at all.</p>
                    <div className='flex flex-col gap-2 text-sm '>
                        <h6 className='text-secondary dark:text-gray-200 font-semibold'>
                            Potential connections
                        </h6>
                        <div className='flex items-center justify-between text-secondary_light dark:text-gray-300'>
                            <div className='flex flex-col '>
                                <p>Friends of friends on Chrip</p>
                                <span className='text-primary dark:text-rose-600'>
                                Message request
                                </span>
                            </div>
                            <button className='text-primary dark:text-rose-600'>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 text-sm '>
                        <h6 className='text-secondary dark:text-gray-200 font-semibold'>
                            Other people
                        </h6>
                        <div className='flex items-center justify-between text-secondary_light dark:text-gray-300'>
                            <div className='flex flex-col '>
                                <p>Others on Chrip</p>
                                <span className='text-primary dark:text-rose-600'>
                                Message request
                                </span>
                            </div>
                            <button className='text-primary dark:text-rose-600'>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy