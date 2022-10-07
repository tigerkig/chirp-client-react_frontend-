import './styles.css';
import EventItem from './EventItem'
import { eventsData } from './EvetnsData'

const Events = () => {
    return (
        <div className='events-wrapper bg-pure dark:bg-dark_secondary rounded-lg py-4 sm:px-4 px-2 shadow-2 flex flex-col gap-6'>
             <div className='flex flex-col gap-4'>
                <div className=' font-semibold text-primary capitalize text-base sm:text-lg dark:text-rose-600'>
                    <span>My Events</span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:w-[100%] w-full sm:mx-auto mt-2'>
                    {
                        eventsData?.slice(0,3)?.map(event => (
                            <EventItem event={event} user/>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className=' font-semibold text-primary capitalize text-base sm:text-lg dark:text-rose-600'>
                    <span>Recent Events</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:w-[100%] w-full sm:mx-auto mt-2'>
                    {
                        eventsData?.map(event => (
                            <EventItem event={event} recent />
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className=' font-semibold text-primary capitalize text-base sm:text-lg dark:text-rose-600'>
                    <span>Past Events</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:w-[100%] w-full sm:mx-auto mt-2'>
                    {
                        eventsData?.map(event => (
                            <EventItem event={event} past={true} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Events