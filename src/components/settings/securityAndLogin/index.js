import React from 'react'

const SecurityAndLogin = () => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-dark dark:text-light font-semibold text-xl'>
                    Security And Login
                </h3>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Recomended
                    </h5>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-secondary_light dark:text-gray-300'>Check your important security settings
                        We'll take you through some steps to help protect your account.</p>
                        <button className='text-sm text-primary dark:text-rose-600'>edit</button>
                    </div>
                </div>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Where you’re logged in
                    </h5>
                    <div className='text-sm text-secondary_light dark:text-gray-300 '>
                        <p>Windows Pc. Lahore,  Pakistan</p>
                        <p className='mt-1'>Chrome - <span className='text-primary dark:text-rose-600 '>Active now</span></p>
                    </div>
                    <div className='text-sm text-secondary_light dark:text-gray-300 '>
                        <p>Windows Pc. Lahore,  Pakistan</p>
                        <p className='mt-1'>Chrome - <span className='text-primary dark:text-rose-600 '>Chrome - Active yesterday at 02-18PM</span></p>
                    </div>
                </div>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Login
                    </h5>
                    <div className='text-sm text-secondary_light dark:text-gray-300 flex items-center justify-between'>
                        <div>
                            <p>Change password</p>
                            <p className='mt-1'>It’s good idea to use a strong password that you don’t choose</p>
                        </div>
                        <button className='text-primary dark:text-rose-600'>Edit</button>
                    </div>
                    <div className='text-sm text-secondary_light dark:text-gray-300 flex items-center justify-between'>
                        <div>
                            <p>Save your login information</p>
                            <p className='mt-1'>
                                It will only be saved on the browser and devices you choose,
                            </p>
                        </div>
                        <button className='text-primary dark:text-rose-600'>Edit</button>
                    </div>
                </div>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Two-factor authentication
                    </h5>
                    <div className='text-sm text-secondary_light dark:text-gray-300 flex items-center justify-between'>
                        <div>
                            <p>Use two-factor authentication</p>
                            <p className='mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <button className='text-primary dark:text-rose-600'>Edit</button>
                    </div>
                    <div className='text-sm text-secondary_light dark:text-gray-300 flex items-center justify-between'>
                        <div>
                            <p>Save your login information</p>
                            <p className='mt-1'>
                                It will only be saved on the browser and devices you choose,
                            </p>
                        </div>
                        <button className='text-primary dark:text-rose-600'>Edit</button>
                    </div>
                </div>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Setting up extra security
                    </h5>
                    <div className='text-sm text-secondary_light dark:text-gray-300 flex items-center justify-between'>
                        <div>
                            <p>Get alert about unrecognised logins</p>
                            <p className='mt-1'>We’ll let you know if anyone logs in from a device or browser you don’t usually use</p>
                        </div>
                        <button className='text-primary dark:text-rose-600'>Edit</button>
                    </div>
                </div>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Advanced
                    </h5>
                    <div className='text-sm text-secondary_light dark:text-gray-300 flex items-center justify-between'>
                        <div>
                            <p>Encrypted notification emails</p>
                            <p className='mt-1'>Add extra security to notification emails from Chrip</p>
                        </div>
                        <button className='text-primary dark:text-rose-600'>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecurityAndLogin