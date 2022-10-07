import React, { useState } from 'react'
import { Search } from '../../../../svgs'
import PopupHeader from '../PopupHeader'
import FeelingItem from './FeelingItem'
import { activitiesData, feelingsData } from './emojisData'
import ActivityItem from './ActivityItem'

const FeelingsPopup = () => {
    const [showFeelings , setShowFeelings] = useState(true)

    return (
        <div  className="flex flex-col gap-3 filter-svg">
            <PopupHeader headerText="How are you feeling?" />
            <div className='flex items-center ml-1  gap-4 text-secondary_light '>
                <div className={`${showFeelings ? 'text-primary dark:text-rose-600' : ''} cursor-pointer`}
                onClick={() => setShowFeelings(true) }>
                    Feelings
                </div>
                <div className={`${showFeelings ? '' : 'text-primary dark:text-rose-600'} cursor-pointer`}
                onClick={() => setShowFeelings(false) }>
                    Activities
                </div>
            </div>
            <form>
                <div className="w-full py-2">
                    <div className="border border-gray-200 dark:border-gray-400  bg-light dark:bg-dark_secondary rounded-full py-2 px-3 text-base flex items-center w-full gap-3">
                        <Search />
                        <input 
                        className="bg-transparent border-none outline-none dark:text-light"
                        type="text" 
                        placeholder="Search your feelings" 
                        />
                    </div>
                </div>
            </form>
           
                {
                    showFeelings 
                    ? 
                        <div className='w-full addScroll grid grid-cols-2 gap-1 justify-between h-[300px] overflow-auto'>
                            {
                                feelingsData?.map((feeling , i) => (
                                    <FeelingItem feeling={feeling} key={i} />
                                ))
                            }
                        </div>
                    : 
                        <div className='w-full h-[300px] addScroll flex flex-col gap-1 overflow-auto '>
                            {
                                activitiesData?.map((activity, i) => (
                                    <ActivityItem key={i} activity={activity} />
                                ))
                            }
                        </div>
                }
        </div>
    )
}

export default FeelingsPopup