import React from 'react'
import { useCreateEventContext } from '../../../context/createEventContext'
import { Favourites, Friends } from '../../../svgs'

const OnlineEvent = () => {
    const { setCurrentEventView , setEventType } = useCreateEventContext();
    return (
        <div>
            <div className='w-full flex items-center py-4 gap-4 '>
                <div 
                 className='flex-1 bg-pure dark:bg-dark_primary rounded-lg shadow-1 border border-transparent hover:border-primary cursor-pointer py-4 px-2 flex flex-col gap-2 items-center justify-center '
                 onClick={() => {
                    setCurrentEventView('eventDetails')
                    setEventType('general')
                 }}
                >
                    <div className='w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center '>
                        <div className="small-svg-2 pure-svg">
                            <Favourites />
                        </div>
                    </div>
                    <h3 className='text-dark dark:text-light font-semibold text-lg'>
                        General
                    </h3>
                    <p className='text-center text-sm text-secondary_light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>
                </div>
                <div 
                 className='flex-1 bg-pure dark:bg-dark_primary rounded-lg shadow-1 border border-transparent hover:border-primary cursor-pointer py-4 px-2 flex flex-col gap-2 items-center justify-center'
                 onClick={() => {
                    setCurrentEventView('eventDetails')
                    setEventType('class')

                 }}
                >
                    <div className='w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center '>
                        <div className="small-svg-2 pure-svg">
                            <Friends />
                        </div>
                    </div>
                    <h3 className='text-dark dark:text-light font-semibold text-lg'>
                        Class
                    </h3>
                    <p className='text-center text-sm text-secondary_light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>
                </div>
            </div>
        </div>
    )
}

export default OnlineEvent