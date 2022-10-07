import React, { useState } from 'react'
import { useGroupContext } from '../../context/createGroupContext';
import { Public } from '../../svgs'

const Create = ({ groupData , setGroupData }) => {
    const  { setGroupView } = useGroupContext();
    
    return (
        <div className='flex flex-col gap-8'>
            <div>
                <input 
                type="text" 
                value={groupData?.name || ''}
                onChange={e => setGroupData({...groupData , name : e.target.value})}
                placeholder='Group name'
                className='w-full py-2 px-2 rounded-md border border-gray-300 placeholder:text-secondary_light dark:text-light dark:border-gray-500 dark:bg-dark_primary dark:outline-none'
                />   
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-semibold text-dark dark:text-light'>Choose privacy</h3>
                <div className='flex flex-col gap-1 '>
                    <div className='flex items-center justify-between rounded-lg py-2 pl-1 pr-2 hover:bg-active hover:dark:bg-dark_primary cursor-pointer'>
                        <label htmlFor="private" className='cursor-pointer'>
                            <div className='flex items-center gap-4'>
                                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-primary '>
                                    <img 
                                    src='/svgs/lock.svg'
                                    className='w-[25px] h-[25px]'  
                                    />
                                </div>
                                <span className='font-semibold text-dark dark:text-gray-200'>Private</span>
                            </div>
                        </label>
                        <div>
                            <input 
                            type="radio"
                            value='private'
                            name='groupPrivacy'
                            checked={groupData?.privacy === 'private'}
                            onChange={e => setGroupData({...groupData , privacy : e.target.value})}
                            id='private' 
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-between rounded-lg py-2 pl-1 pr-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer'>
                        <label htmlFor="public" className='cursor-pointer'>
                            <div className='flex items-center gap-4'>
                                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-primary '>
                                    <Public />
                                </div>
                                <span className='text-dark font-semibold dark:text-gray-200'>Public</span>
                            </div>
                        </label>
                        <div>
                            <input 
                            type="radio"
                            value='public'
                            name='groupPrivacy'
                            id='public'
                            checked={groupData?.privacy === 'public'}
                            onChange={e => setGroupData({...groupData , privacy : e.target.value})}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <button className="btn-primary w-full disabled:cursor-not-allowed"
                disabled={!groupData?.name || !groupData?.privacy}
                onClick={() => setGroupView('invite')}>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Create