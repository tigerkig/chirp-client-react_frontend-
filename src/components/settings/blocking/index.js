import React from 'react'

const Blocking = () => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-dark dark:text-light font-semibold text-xl'>
                    Blocking
                </h3>
            </div>
            <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-8 mt-4'>
                <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                    Profile
                </h5>
                <div className='flex flex-col gap-6'>
                    <div className='text-sm flex flex-col gap-1.5'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold'>Restrict list</h5>
                        <div className='flex justify-between items-start gap-8 text-secondary_light'>
                            <p>When you add a friend to your Restricted list, they won't see posts on Facebook that you only share to Friends. They may still see things that you share to Public or on a mutual friend's timeline, and posts they're tagged in. Facebook doesn't notify your friends when you add them to your Restricted list.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='text-sm flex flex-col gap-1.5'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold'>Restrict list</h5>
                        <div className='flex justify-between items-start gap-8 text-secondary_light'>
                            <p>When you add a friend to your Restricted list, they won't see posts on Facebook that you only share to Friends. They may still see things that you share to Public or on a mutual friend's timeline, and posts they're tagged in. Facebook doesn't notify your friends when you add them to your Restricted list.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='text-sm flex flex-col gap-1.5'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold'>Block users</h5>
                        <div className='flex justify-between items-start gap-8 text-secondary_light'>
                            <p>Once you block someone, that person can no longer see things you post on your timeline, tag you, invite you to events or groups, start a conversation with you, or add you as a friend. Note: Does not include apps, games or groups you both participate in.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='text-sm flex flex-col gap-1.5'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold'>Block messages</h5>
                        <div className='flex justify-between items-start gap-8 text-secondary_light'>
                            <p>If you block someone's profile on Chrip, they won't be able to contact you in Messenger either. Unless you block someone's Facebook profile and any others that they may create, they may be able to post on your timeline, tag you and comment on your posts or comments.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='text-sm flex flex-col gap-1.5'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold'>Block app invites</h5>
                        <div className='flex justify-between items-start gap-8 text-secondary_light'>
                            <p>Once you've blocked app invitations from someone's profile, you'll automatically ignore future app requests from that person's profile. To block invitations from a specific friend's profile, click the "Ignore all invitations from this profile" link under your latest request.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='text-sm flex flex-col gap-1.5'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold'>Block event invitations</h5>
                        <div className='flex justify-between items-start gap-8 text-secondary_light'>
                            <p>Once you've blocked event invitations from someone's profile, you'll automatically ignore future event requests from that profile.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div> 
                    <div className='text-sm flex flex-col gap-1.5'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold'>Block apps</h5>
                        <div className='flex justify-between items-start gap-8 text-secondary_light'>
                            <p>Once you've blocked an app, it can no longer contact you or get non-public information about you through Chrip.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div> 
                    <div className='text-sm flex flex-col gap-1.5'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold'>Block pages</h5>
                        <div className='flex justify-between items-start gap-8 text-secondary_light'>
                            <p>Once you've blocked a Page, that Page can no longer interact with your posts or like or reply to your comments. You won't be able to post to the Page's timeline or message the Page. If you currently like the Page, blocking it will also unlike and unfollow it.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Blocking