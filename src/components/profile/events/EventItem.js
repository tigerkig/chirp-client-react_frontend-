import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Share } from '../../../svgs'

const EventItem = ({ event , user = false , recent= false , past = false }) => {
    const navigate = useNavigate();
    return (
        <div className='flex gap-4'>
            <div>
                <img 
                src={event?.image} alt={event?.name} 
                className='w-[170px] h-[140px] rounded-md object-cover'
                />
            </div>
            <div className='text-secondary dark:text-gray-300 text-sm flex flex-col gap-1'>
                <span>{event?.status}</span>
                <p 
                className='text-black dark:text-gray-200 text-base font-semibold cursor-pointer'
                onClick={() => navigate('/event/1')}
                >
                    {event?.name}
                </p>
                <span>{event?.location}</span>
                <span className='text-xs'>{event?.time}</span>
                {
                    user 
                    ?
                    <div className='border border-primary dark:border-gray-300 py-1.5 px-4 flex items-center justify-center rounded-md cursor-pointer mt-2' title='Share with your friends'>
                        <button >
                            <div className="small-svg-2">
                                <Share />
                            </div>
                        </button>
                    </div>
                    :
                    <div className='w-full flex items-center gap-2 mt-2'>
                        <button className='btn-primary' disabled={past}>
                            Going
                        </button>
                        <button className='btn-secondary' disabled={past}>
                            Interested
                        </button>
                        <button disabled={past} >
                            <div className="small-svg-2">
                                <Share />
                            </div>
                        </button>
                    </div>
                }


            </div>
        </div>
    )
}

export default EventItem