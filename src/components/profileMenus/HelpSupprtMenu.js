import React from 'react'
import { Feedback, HelpSupport , Messenger } from '../../svgs'

const HelpSupprtMenu = ({ setCurrentMenu }) => {
    return (
        <>
            <div className='text-center pt-1 pb-2 relative'>
                <div 
                className='absolute left-[12px] -top-[1px]  text-primary cursor-pointer w-[35px] h-[35px] bg-light rounded-full flex items-center justify-center '
                onClick={() => setCurrentMenu('main')}
                >
                    <img 
                    src='/leftArrow.png' 
                    alt='Back' 
                    className='w-full max-w-[25px] h-[25px]'
                    />
                </div>
                <h3 className='text-lg font-semibold dark:text-light'>
                    Help & Support
                </h3>
            </div>
            <div className='w-full rounded-lg p-2 flex items-center justify-between gap-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <div className="primary-circle-svg">
                        <HelpSupport />
                    </div>
                    <span className=' text-secondary_light dark:text-gray-200'>
                        Help Center
                    </span>
                </div>
            </div>

            <div className='w-full rounded-lg p-2 flex items-center justify-between gap-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <div className="primary-circle-svg">
                        <Messenger />
                    </div>
                    <span className=' text-secondary_light dark:text-gray-200'>Support Inbox</span>
                </div>
            </div>

            <div className='w-full rounded-lg p-2 flex items-center justify-between gap-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <div className="primary-circle-svg">
                        <Feedback />
                    </div>
                    <span className=' text-secondary_light dark:text-gray-200'>Report a Problem</span>
                </div>
            </div>
        </>
    )
}

export default HelpSupprtMenu