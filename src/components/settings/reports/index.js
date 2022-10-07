import React, { useRef, useState } from 'react'
import useClickOutside from '../../../utils/clickOutside';
import PopupHeader from './PopupHeader';

const Reports = () => {
    const popup = useRef(null);
    const [showReports , setShowReports] = useState(false);
    const [showAlerts , setShowALerts] = useState(false);

    useClickOutside(popup , () => {
        setShowReports(false);
        setShowALerts(false);
    })

    return (
        <div className='flex flex-col gap-4 items-center px-2'>
            <h3 className='text-dark font-semibold text-lg dark:text-light'>
                Reports
            </h3>
            <div className='bg-pure dark:bg-dark_primary w-full sm:w-[70%] mx-auto rounded-lg text-center cursor-pointer shadow-2 py-3'
            onClick={() => {
                setShowReports(true)
            }}>
                <h5 className='text-dark dark:text-gray-200 font-semibold text-base'>
                    Reports about others
                </h5>
            </div>
            <div className='bg-pure dark:bg-dark_primary w-full sm:w-[70%] mx-auto rounded-lg text-center cursor-pointer shadow-2 py-3'
            onClick={() => {
                setShowALerts(true)
            }}>
                <h5 className='text-dark dark:text-gray-200 font-semibold text-base'>
                    Your alerts
                </h5>
            </div>

            {
                showReports && 
                <div>
                     <div className='bg-blur'>
                        <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                            <div className='popup w-full sm:w-[500px] h-auto bg-pure dark:bg-dark_secondary rounded-lg p-4 ' ref={popup}>
                                <PopupHeader 
                                setShowALerts={setShowALerts}
                                setShowReports={setShowReports}
                                headerText='Reports' 
                                />
                                <div className='flex items-center justify-center py-6 text-sm text-secondary_light'>
                                    <p>No reports yet..!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
             {
                showAlerts && 
                <div>
                     <div className='bg-blur'>
                        <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                            <div className='popup w-full sm:w-[500px] h-auto bg-pure dark:bg-dark_secondary rounded-lg p-4 ' ref={popup}>
                                <PopupHeader 
                                setShowALerts={setShowALerts}
                                setShowReports={setShowReports}
                                headerText='Your Alert' 
                                />
                                <div className='flex items-center justify-center py-6 text-sm text-secondary_light'>
                                    <p>No violations..!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Reports