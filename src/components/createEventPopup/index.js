import './styles.css';
import { useRef } from 'react';
import useClickOutside from '../../utils/clickOutside';
import Header from './Header';
import { useCreateEventContext } from '../../context/createEventContext';
import SelectEvent from './SelectEvent';
import OnlineEvent from './online';
import InPersonEvent from './inPerson/Location';
import EventDetails from './EventDetails';
import ChooseGroups from './ChooseGroups';
import Location from './online/generalEvent/Location';
import Description from './Description';
import ClassDetails from './online/classEvent/ClassDetails';
import HowToJoin from './online/classEvent/HowToJoin';
import InPersonLocation from './inPerson/Location';
// import Moment from 'react-moment';

const CreateEventPopup = () => {
    const popup = useRef(null);
    const { setShowEventPopup , currentEventView , setCurrentEventView } = useCreateEventContext();

    useClickOutside(popup , () => {
        setShowEventPopup(false);
        setCurrentEventView('select')
    })
    
    return (
        <div className='bg-blur'>
            <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                <div className='popup w-full sm:w-[500px] h-auto bg-pure dark:bg-dark_secondary rounded-lg p-4 ' 
                ref={popup}
                >
                    <Header />
                    <div className="line bg-primary dark:bg-gray-500 w-full h-[1px] mt-2 mb-4"></div>
                    <div>
                        {
                            currentEventView === 'select' 
                            ? 
                                <SelectEvent />
                            :
                            currentEventView === 'online' 
                            ? 
                                <OnlineEvent />
                            :
                            currentEventView === 'inPerson' 
                            ? 
                                <InPersonEvent />
                            :
                            currentEventView === 'eventDetails' 
                            ? 
                                <EventDetails />
                            : 
                            currentEventView === 'chooseGroups' 
                            ? 
                                <ChooseGroups />
                            :
                            currentEventView === 'generalEventLocation' 
                            ? 
                                <Location />
                            :
                            currentEventView === 'description' 
                            ? 
                                <Description />
                            :
                            currentEventView === 'classDetails' 
                            ? 
                                <ClassDetails/>
                            :
                            currentEventView === 'joinClass' 
                            ? 
                                <HowToJoin/>
                            : 
                            currentEventView === 'inPersonLocation' 
                            ? 
                                <InPersonLocation/>
                            : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEventPopup;