import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCreateEventContext } from '../../context/createEventContext';

const EventDetails = () => {
    const [name , setName] = useState('');
    const [startDate , setStartDate] = useState(null)
    const [endDate , setEndDate] = useState(null)
    const [privacy , setPrivacy] = useState('');

    const { setCurrentEventView , eventType } = useCreateEventContext();
    
    const handleNextClick = () => {
        if(eventType === 'general'){
            setCurrentEventView('generalEventLocation')
        } else if(eventType === 'class'){
            setCurrentEventView('classDetails');
        } else if(eventType === 'inPerson'){
            setCurrentEventView('inPersonLocation');
        }
    }

    return (
        <div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-dark dark:text-light font-medium text-lg capitalize'>
                    Event Details
                </h3>
                <div className='flex items-center gap-3'>
                    <div className="circle-img">
                        <img src='/users/user-1.jpg' />
                    </div>
                    <div className='flex flex-col text-sm text-dark dark:text-gray-200'>
                        <h5 className='font-medium'>Umair Ahmad</h5>
                        <span className='text-xs text-secondary_light dark:text-gray-400'>
                            Your Profile
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-full h-[220px] addScroll overflow-auto'>
                    <div className='flex flex-col gap-1.5'>
                        <input 
                        type="text"  
                        value={name}
                        onChange={ e => setName(e.target.value)}
                        placeholder='Event Name'
                        maxLength={100}
                        className='border border-gray-300 focus:outline-primary p-2.5 text-dark placeholder:text-secondary_light dark:bg-dark_primary dark:text-gray-200 dark:outline-none dark:border-gray-500 rounded-md'
                        />
                        <span className='text-xs text-secondary_light'>
                            {name.length}/100
                        </span>
                    </div>
                    <div className='flex items-center gap-3 sm:flex-row flex-col'>
                        <div className='flex-1'>
                            <DatePicker
                            minDate={new Date()}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            placeholderText='Start Date and Time'
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className='dark:bg-dark_primary dark:border-gray-500 dark:outline-none'
                            />
                        </div>
                        <div className='flex-1'>
                            <DatePicker
                            minDate={startDate}
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            showTimeSelect
                            placeholderText='End Date and Time'
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className='dark:bg-dark_primary dark:border-gray-500 dark:outline-none'
                            />
                        </div>
                    </div>
                    <div>
                        <select 
                        className='w-full outline-none border border-gray-300 p-2.5 rounded-lg dark:bg-dark_primary dark:text-gray-200 dark:outline-none dark:border-gray-500'
                        onChange={ e => {
                            setPrivacy(e.target.value);
                            if(e.target.value === 'groups'){
                                setCurrentEventView('chooseGroups')
                            }
                        }}
                        >
                            <option value="null">Choose Privacy</option>
                            <option value="public">Public</option>
                            <option value="private">private</option>
                            <option value="friends">Friends</option>
                            <option value="groups">Groups</option>
                        </select>
                    </div>
                    
                </div>
                <div onClick={handleNextClick}>
                    <button className="btn-primary w-full">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventDetails