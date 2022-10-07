import { useCreateEventContext } from '../../context/createEventContext';
import { CircleCross, LeftArrow } from '../../svgs';

const Header = () => {
    const { 
        setShowEventPopup , currentEventView , setCurrentEventView , eventType 
    } = useCreateEventContext();


    const handleBackClick = () => {
        if(currentEventView === 'online' || currentEventView === 'inPerson'){
            setCurrentEventView('select')
        } 
        else if(currentEventView === 'eventDetails'){
            setCurrentEventView('select')
        } 
        else if(currentEventView === 'chooseGroups'){
            setCurrentEventView('eventDetails')
        } 
        else if(currentEventView === 'generalEventLocation'){
            setCurrentEventView('eventDetails')
        } 
        else if(currentEventView === 'description' && eventType === 'general'){
            setCurrentEventView('generalEventLocation')
        } 
        else if(currentEventView === 'classDetails'){
            setCurrentEventView('eventDetails')
        }
        else if(currentEventView === 'joinClass'){
            setCurrentEventView('classDetails')
        }
        else if(currentEventView === 'inPersonLocation'){
            setCurrentEventView('eventDetails')
        }
        else if(currentEventView === 'description' && eventType === 'inPerson'){
            setCurrentEventView('inPersonLocation')
        } 
    }
    return (
        <div className='create-story-header w-full flex items-center justify-between py-2'>
            {
                currentEventView !== 'select' &&
                <div className='bg-light dark:bg-dark_primary flex items-center justify-center rounded-full small-svg cursor-pointer'
                onClick={handleBackClick}>
                    <LeftArrow />
                </div>
            }
            <div className='text-xl font-semibold text-primary text-center w-full dark:text-light'>
                <h3>Create Event</h3>
            </div>
            <div 
            className="cursor-pointer" 
            onClick={() => {
                setShowEventPopup(false);
               setCurrentEventView('select')
            }}
            >
                <CircleCross />
            </div>
        </div>
    )
}

export default Header;