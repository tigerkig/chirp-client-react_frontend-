import React, { useState } from 'react'
import { useCreateEventContext } from '../../context/createEventContext';
import { Search } from '../../svgs';

const ChooseGroups = () => {
    const [groupSearch ,setGroupSearch] = useState('');
    const { eventType , setCurrentEventView } = useCreateEventContext();

    const handleClick = () => {
        if(eventType === 'general'){
            setCurrentEventView('generalEventLocation')
        }
        else if(eventType === 'class'){
            setCurrentEventView('classDetails')
        }
        else if(eventType === 'inPerson'){
            setCurrentEventView('inPersonLocation')
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className='w-full flex flex-col gap-4 px-3 addScroll h-[250px] overflow-auto'>
                <h3 className='text-lg text-primary font-medium text-center'>
                    Choose Groups
                </h3>
                <div className="border border-gray-200 bg-light rounded-full py-2 px-3 text-base flex items-center w-full  gap-3">
                    <Search />
                    <input 
                    className="bg-transparent border-none outline-none w-full  text-sm sm:text-base"
                    type="text" 
                    placeholder='Search groups' 
                    value={groupSearch}
                    onChange={(e) => {
                        setGroupSearch(e.target.value);
                    }}
                />
                </div>
                <div className='flex flex-col gap-2 '>
                    <p className='text-primary text-sm font-medium '>Groups You Manage</p>
                    <div className='flex items-center justify-between hover:bg-active py-2 pr-1 pl-2 rounded-lg cursor-pointer'>
                        <label htmlFor="group">
                            <div className='flex items-center gap-2'>
                                <div className="circle-img">
                                    <img src='/users/user-1.jpg' />
                                </div>
                                <div className='text-sm text-dark '>
                                    <p className='font-medium'>Ghair Mulki</p>
                                    <p className='text-[10px] text-secondary_light -mt-[1px]'>
                                        Private Group. 21 Members
                                    </p>
                                </div>
                            </div>
                        </label>
                        <input type="checkbox" id="group" />
                    </div>
                </div>
                <div className='flex flex-col gap-2 '>
                    <p className='text-primary font-medium text-sm'>Groups You have joined</p>
                    <div className='flex items-center justify-between hover:bg-active py-2 pr-1 pl-2 rounded-lg cursor-pointer'>
                        <label htmlFor="group1">
                            <div className='flex items-center gap-2'>
                                <div className="circle-img">
                                    <img src='/users/user-1.jpg' />
                                </div>
                                <div className='text-sm text-dark '>
                                    <p className='font-medium'>Ghair Mulki</p>
                                    <p className='text-[10px] text-secondary_light -mt-[1px]'>
                                        Private Group. 21 Members
                                    </p>
                                </div>
                            </div>
                        </label>
                        <input type="checkbox" id="group1" />
                    </div>
                    <div className='flex items-center justify-between hover:bg-active py-2 pr-1 pl-2 rounded-lg cursor-pointer'>
                        <label htmlFor="group2">
                            <div className='flex items-center gap-2'>
                                <div className="circle-img">
                                    <img src='/users/user-1.jpg' />
                                </div>
                                <div className='text-sm text-dark '>
                                    <p className='font-medium'>Ghair Mulki</p>
                                    <p className='text-[10px] text-secondary_light -mt-[1px]'>
                                        Private Group. 21 Members
                                    </p>
                                </div>
                            </div>
                        </label>
                        <input type="checkbox" id="group2" />
                    </div>
                    <div className='flex items-center justify-between hover:bg-active py-2 pr-1 pl-2 rounded-lg cursor-pointer'>
                        <label htmlFor="group3">
                            <div className='flex items-center gap-2'>
                                <div className="circle-img">
                                    <img src='/users/user-1.jpg' />
                                </div>
                                <div className='text-sm text-dark '>
                                    <p className='font-medium'>Ghair Mulki</p>
                                    <p className='text-[10px] text-secondary_light -mt-[1px]'>
                                        Private Group. 21 Members
                                    </p>
                                </div>
                            </div>
                        </label>
                        <input type="checkbox" id="group3" />
                    </div>
                    <div className='flex items-center justify-between hover:bg-active py-2 pr-1 pl-2 rounded-lg cursor-pointer'>
                        <label htmlFor="group4">
                            <div className='flex items-center gap-2'>
                                <div className="circle-img">
                                    <img src='/users/user-1.jpg' />
                                </div>
                                <div className='text-sm text-dark '>
                                    <p className='font-medium'>Ghair Mulki</p>
                                    <p className='text-[10px] text-secondary_light -mt-[1px]'>
                                        Private Group. 21 Members
                                    </p>
                                </div>
                            </div>
                        </label>
                        <input type="checkbox" id="group4" />
                    </div>
                    <div className='flex items-center justify-between hover:bg-active py-2 pr-1 pl-2 rounded-lg cursor-pointer'>
                        <label htmlFor="group5">
                            <div className='flex items-center gap-2'>
                                <div className="circle-img">
                                    <img src='/users/user-1.jpg' />
                                </div>
                                <div className='text-sm text-dark '>
                                    <p className='font-medium'>Ghair Mulki</p>
                                    <p className='text-[10px] text-secondary_light -mt-[1px]'>
                                        Private Group. 21 Members
                                    </p>
                                </div>
                            </div>
                        </label>
                        <input type="checkbox" id="group5" />
                    </div>
                </div>

            </div>
            <div>
                <button className="btn-primary w-full"
                onClick={handleClick}>
                    Done
                </button>
            </div>
        </div>
    )
}

export default ChooseGroups