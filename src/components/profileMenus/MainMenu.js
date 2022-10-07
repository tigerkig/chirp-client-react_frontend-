import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PopupContext } from '../../context/popupContext';
import { Feedback , HelpSupport , Logout , RightArrowPrimary, Settings } from '../../svgs';

const MainMenu = ( { setCurrentMenu } ) => {
    const { setShowFeedbackPopup } = useContext(PopupContext)
    return (
        <>
            <Link to='/profile'>
                    <div className='w-full rounded-lg p-2 flex items-center gap-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer'>
                        <div className="circle-img">
                            <img src='/users/user-1.jpg' alt='User profile' />
                        </div>
                        <div className='text-base text-primary flex flex-col'>
                            <span className='text-dark font-semibold capitalize dark:text-light'>
                                Umair Ahmad
                            </span>
                            <span className='text-xs dark:text-rose-600'>View Profile</span>
                        </div>
                    </div>
                </Link>
                <div className="line bg-primary dark:bg-gray-500 w-full h-[1px] my-2"></div>

                <div className='w-full rounded-lg p-2 flex items-center justify-between gap-2 hover:bg-active dark:hover:bg-dark_primary'>
                    <div className='flex items-center gap-2'>
                        <div className='primary-circle-svg'>
                            <Settings />
                        </div>
                        <span className=' text-secondary_light dark:text-gray-200'>Settings & privacy</span>
                    </div>
                    <div className='small-svg-2'>
                        <RightArrowPrimary />
                    </div>
                </div>
                <div className='w-full rounded-lg p-2 flex items-center justify-between gap-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer '
                onClick={() => setCurrentMenu('theme')}>
                    <div className='flex items-center gap-2'>
                        <div className="primary-circle-svg">
                            <img 
                            src='/svgs/moon.svg' 
                            alt='Display'  
                            className='w-[25px] h-[25px] moon-icon'
                            />
                        </div>
                        <span className=' text-secondary_light dark:text-gray-200'>Display Mode</span>
                    </div>
                    <div className='small-svg-2'>
                        <RightArrowPrimary />
                    </div>
                </div>
                <div className='w-full rounded-lg p-2 flex items-center justify-between gap-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer '
                onClick={() => setCurrentMenu('help')}>
                    <div className='flex items-center gap-2'>
                        <div className="primary-circle-svg">
                            <HelpSupport />
                        </div>
                        <span className=' text-secondary_light dark:text-gray-200'>Help & support</span>
                    </div>
                    <div className='small-svg-2'>
                        <RightArrowPrimary />
                    </div>
                </div>

                <div className='w-full rounded-lg p-2 flex items-center justify-between gap-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer '>
                    <div className='flex items-center gap-2'
                    onClick={() => {
                        setShowFeedbackPopup(true);
                        setCurrentMenu(null)
                    }}>
                        <div className="primary-circle-svg">
                            <Feedback />
                        </div>
                        <span className=' text-secondary_light dark:text-gray-200'>Give Feedback</span>
                    </div>
                   
                </div>

                <div className='w-full rounded-lg p-2 flex items-center justify-between gap-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer'>
                    <div className='flex items-center gap-2'>
                        <div className="primary-circle-svg">
                            <Logout />
                        </div>
                        <span className=' text-secondary_light dark:text-gray-200'>Logout</span>
                    </div>
                </div>
        </>
    )
}

export default MainMenu