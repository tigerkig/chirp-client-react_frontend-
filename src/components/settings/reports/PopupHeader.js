import React from 'react'
import { CircleCross } from '../../../svgs';

const PopupHeader = ( { setShowALerts , setShowReports , headerText } ) => {
    return (
        <div className="popup-header w-full bg-pure dark:bg-dark_secondary  flex items-center justify-center relative border-b border-b-primary dark:border-b-gray-400 pb-4">
            <h3 className='font-semibold text-primary dark:text-gray-200 text-base sm:text-xl '>
                {headerText}
            </h3>
            <div className='absolute right-0 cursor-pointer'
            onClick={() => {
                setShowALerts(false);
                setShowReports(false);
            }}>
                <CircleCross />
            </div>
        </div>
    )
}

export default PopupHeader