import React from 'react'

const ChirpInformation = () => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-dark dark:text-light font-semibold text-xl'>
                    Your Chirp Information
                </h3>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Information
                    </h5>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-secondary_light dark:text-gray-400'>You can view or download your information and  delete account at any time.</p>
                    </div>
                </div>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                            Access your information
                        </h5>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-secondary_light dark:text-gray-400'>View your category</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                            Access your information
                        </h5>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-secondary_light dark:text-gray-400'>Copy your photos,videos,posts or other info to another service</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                            Download your information
                        </h5>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-secondary_light dark:text-gray-400'>Download a copy of your information to keep or to transfer to another service</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                            Activity log
                        </h5>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-secondary_light dark:text-gray-400'>View and manage your informationo and same settings.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                            Off-Chrip activity
                        </h5>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-secondary_light dark:text-gray-400'>View and clear activity from business and organization that you visit off Chrip.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                            Manage your information
                        </h5>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-secondary_light dark:text-gray-400'>Learn more about how you can manage your information.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                            Deactivate and deletion
                        </h5>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-secondary_light dark:text-gray-400'>Temporarily deactivate or permanently delete your account.</p>
                            <button className='text-primary dark:text-rose-600'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChirpInformation