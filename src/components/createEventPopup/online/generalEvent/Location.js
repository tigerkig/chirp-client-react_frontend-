import React from 'react'
import { useCreateEventContext } from '../../../../context/createEventContext'
import { Video, VideoFill } from '../../../../svgs'

const Location = () => {
    const { setCurrentEventView } = useCreateEventContext();
    const handleClick = () => {
        setCurrentEventView('description');
    }
    return (
        <div>
            <div className='w-full flex flex-col  py-4 gap-4 '>
                <h3 className='text-primary font-semibold text-lg dark:text-light '>
                    Location
                </h3>
                <div 
                className='flex-1 bg-pure dark:bg-dark_primary rounded-lg shadow-1 border border-transparent hover:border-primary cursor-pointer py-4 px-2 flex flex-col gap-2 items-center justify-center'
                onClick={handleClick}
                >
                    <div className='w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center '>
                        <div className="small-svg-2 pure-svg">
                            <VideoFill />
                        </div>
                    </div>
                    <h3 className='text-dark font-semibold text-lg dark:text-gray-200'>
                        Messenger Room
                    </h3>
                    <p className='text-center text-sm text-secondary_light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>
                </div>
                <div 
                className='flex-1 bg-pure dark:bg-dark_primary rounded-lg shadow-1 border border-transparent hover:border-primary cursor-pointer py-4 px-2 flex flex-col gap-2 items-center justify-center'
                onClick={handleClick}
                >
                    <div className='w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center '>
                        <div className="small-svg-2 pure-svg">
                            <Video />
                        </div>
                    </div>
                    <h3 className='text-dark font-semibold text-lg dark:text-gray-200'>
                        Facebook Live
                    </h3>
                    <p className='text-center text-sm text-secondary_light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>
                </div>
            </div>
     </div>
    )
}

export default Location