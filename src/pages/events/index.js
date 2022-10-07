import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';
import Events from '../../components/profile/events';
import { useCreateEventContext } from '../../context/createEventContext';


const EventsPage = () => {
    const { setShowEventPopup } = useCreateEventContext();
    
    return (
        <div>
            <Navbar />
            <div className='common-wrapper min-h-screen margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='common-left'>
                    <Leftbar />
                </div>
                <div className='common-container w-full py-4'>
                    <div className='common flex flex-col gap-4'>
                        <div className='w-full bg-pure dark:bg-dark_secondary rounded-lg sm:p-4 p-3 flex items-center justify-between shadow-2'>
                            <h3 className='text-primary dark:text-rose-600 font-semibold text-xl'>
                                Events
                            </h3>
                            <div>
                                <button className="btn-primary" 
                                onClick={() => {
                                    setShowEventPopup(true);
                                }}
                                >
                                    Create Event
                                </button>
                            </div>
                        </div>
                        {
                            <Events />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsPage;