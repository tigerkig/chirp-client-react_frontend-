import { useCreateEventContext } from '../../context/createEventContext';
import { Friends, Public } from '../../svgs';


const SelectEvent = () => {
    const { setCurrentEventView , setEventType } = useCreateEventContext();

    const handleOnlineClick = () => {
        setEventType('online')
        setCurrentEventView('online');
    }
    const handleInPersonClick = () => {
        setEventType('inPerson');
        setCurrentEventView('eventDetails')
    }

    return (
        <div>
            <div className='w-full h-full flex gap-4  flex-col'>
                <div 
                className='flex-1 bg-pure dark:bg-dark_primary rounded-lg shadow-1 border border-transparent hover:border-primary cursor-pointer py-4 px-2 flex flex-col gap-2 items-center justify-center'
                onClick={handleOnlineClick}
                >
                    <div className='w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center '>
                        <div className="small-svg-2">
                            <Public />
                        </div>
                    </div>
                    <h3 className='text-dark dark:text-gray-200 font-semibold text-lg'>
                        Online
                    </h3>
                    <p className='text-center text-sm text-secondary_light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sapiente hic excepturi beatae molestiae asperiores.</p>
                </div>
                <div 
                className='flex-1 bg-pure dark:bg-dark_primary rounded-lg shadow-1 border border-transparent hover:border-primary cursor-pointer py-4 px-2 flex flex-col gap-2 items-center justify-center'
                onClick={handleInPersonClick}

                >
                    <div className='w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center '>
                        <div className="small-svg-2 pure-svg">
                            <Friends />
                        </div>
                    </div>
                    <h3 className='text-dark dark:text-gray-200 font-semibold text-lg'>
                        InPerson
                    </h3>
                    <p className='text-center text-sm text-secondary_light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sapiente hic excepturi beatae molestiae asperiores.</p>
                </div>
            </div> 
        </div>
    )
}

export default SelectEvent