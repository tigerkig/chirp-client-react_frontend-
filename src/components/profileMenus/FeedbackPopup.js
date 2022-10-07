import React, { useContext, useRef } from 'react'
import { PopupContext } from '../../context/popupContext';
import { CircleCross, SingleUser } from '../../svgs';
import useClickOutside from '../../utils/clickOutside';

const FeedbackPopup = () => {
    const popup = useRef(null);
    const { setShowFeedbackPopup } = useContext(PopupContext)

    useClickOutside(popup , () => setShowFeedbackPopup(false))

    return (
        <div className='bg-blur'>
            <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                <div className='popup w-full sm:w-[500px] h-auto bg-pure dark:bg-dark_secondary rounded-lg p-4 ' ref={popup}>

                    <div className="popup-header w-full bg-pure dark:bg-dark_secondary flex items-center justify-center relative border-b border-b-primary dark:border-b-gray-500 pb-4">
                        <h3 className='font-semibold text-primary text-base sm:text-xl dark:text-light'>
                            Give Feedback
                        </h3>
                        <div className='absolute right-0 cursor-pointer'
                        onClick={() => {
                            setShowFeedbackPopup(false);
                        }}>
                            <CircleCross />
                        </div>
                
                    </div>

                    <div className='flex flex-col gap-1 py-4'>
                        <div className='flex items-center gap-4 rounded-lg p-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer'>
                            <div className='w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center primary-circle-svg'>
                                <SingleUser />
                            </div>
                            <div className='text-sm'>
                                <p className='text-dark font-semibold dark:text-gray-200'>
                                    Help us to improve Chirp
                                </p>
                                <p className='-mt-[1px] text-[10px] text-secondary_light'>
                                    Give feedback about your Chrip experience.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 rounded-lg p-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer'>
                            <div className='w-[50px] h-[50px]    bg-primary rounded-full flex items-center justify-center primary-circle-svg'>
                                <SingleUser />
                            </div>
                            <div className='text-sm'>
                                <p className='text-dark font-semibold dark:text-gray-200'>
                                    Something went wrong
                                </p>
                                <p className='-mt-[1px] text-[10px] text-secondary_light'>
                                    Let us know about a broken feature.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeedbackPopup