import './styles.css';
import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';
import { eventsData } from '../../components/profile/events/EvetnsData';
import { Friends, Public2, Share, SingleUser } from '../../svgs';

const EventDetails = () => {
    const event = eventsData[3];
    
    return (
        <div>
            <Navbar />
            <div className='common-wrapper margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='common-left'>
                    <Leftbar />
                </div>
                <div className='common-container w-full py-4'>
                    <div className='common '>
                        <div className="min-h-screen flex flex-col gap-2">
                            <div className='bg-pure pb-4 sm:p-4 rounded-md dark:bg-dark_secondary shadow-2'>
                                <div className='w-full h-[150px] sm:h-[300px] '>
                                    <img src={event?.image} alt={event?.name} className='w-full h-full object-cover sm:rounded-md'/>
                                </div>
                                <div className='flex justify-between w-full md:flex-row flex-col gap-4 sm:px-0 px-2 mt-2 '>
                                    <div className='flex flex-col gap-2 '>
                                        <div className='sm:text-sm text-xs dark:text-gray-400 flex items-center text-secondary'>
                                            <span>SEP 22 at 6 AM</span>
                                            <span>-</span>
                                            <span>SEP 23 at 1 PM UTC+05</span>
                                        </div>
                                        <div className='text-lg sm:text-2xl font-medium dark:text-gray-200 text-secondary'>
                                            <h3>Basic Accounting and Bookkeeping for Non-Accountant webinar</h3>
                                            <span className='text-xs text-secondary_light dark:text-gray-400'>Online Class</span>
                                            <p className='bg-active w-fit  text-sm py-1.5 px-4 rounded-md text-dark mt-2 '>
                                                Thu, Sep 22
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-fit flex items-center gap-2 mt-2 justify-end '>
                                        <button className='btn-primary'>
                                            Going
                                        </button>
                                        <button className='btn-secondary' >
                                            Interested
                                        </button>
                                        <button  >
                                            <div className="small-svg-2">
                                                <Share />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                           <div className='w-full dark:bg-dark_secondary rounded-md mt-4 p-4 bg-pure shadow-2'>
                                <h3 className='text-lg dark:text-gray-200 text-secondary'>Details</h3>
                                <ul className='mt-4 flex flex-col gap-4 dark:text-gray-200 text-secondary'>
                                    <li className='flex items-center gap-3'>
                                        <div className="primary-circle-svg">
                                            <SingleUser />
                                        </div>
                                        <p>2 days</p>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <div className="primary-circle-svg">
                                            <Friends />
                                        </div>
                                        <p>70 going , 555 interested</p>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <div className="primary-circle-svg">
                                            <SingleUser />
                                        </div>
                                        <p>Class by NPM Consulting services</p>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <div className="primary-circle-svg">
                                            <Public2 />
                                        </div>
                                        <p>Anyone on or off Chirp</p>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <p>Get a good paying job working with NGO’s and the UN with a flexible work arrangement – spend time with your family & travel around the world</p>
                                    </li>
                                </ul>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails;