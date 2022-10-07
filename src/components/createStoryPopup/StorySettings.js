import React from 'react'
import { Friends, Public, SingleUser } from '../../svgs'

const StorySettings = () => {
    return (
        <div className='story-settings-container bg-pure dark:bg-black rounded-lg shadow-2 p-4 flex flex-col gap-1 w-[300px]'>
            <div className=' text-center text-dark dark:text-light font-semibold'>
                <h3>Story Privacy</h3>
            </div>
            <div className='my-2'>
                <h5 className='text-xs text-dark dark:text-light font-semibold'>
                    Who can see your story?
                </h5>
                <p className='text-[10px] text-secondary_light dark:text-gray-400'>
                    our story will be visible for 24 hours on Chrip.
                </p>
            </div>
            <div className='flex items-center justify-between rounded-lg py-2 hover:bg-active dark:hover:bg-dark_secondary pl-1 pr-2'>
                <label htmlFor='public' className='flex items-center gap-2 cursor-pointer'>
                    <div className='w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center pure-svg '>
                        <Public />
                    </div>
                    <div>
                        <h6 className='text-sm text-secondary dark:text-gray-200 font-semibold'>
                            Public
                        </h6>
                        <p className='text-secondary_light text-[10px] dark:text-gray-400 '>
                            Anyone on facebook
                        </p>
                    </div>
                </label>
                <div>
                    <input type="radio" id='public' value='public' name='storySetting'  />
                </div>
            </div>
            <div className='flex items-center justify-between rounded-lg py-2 hover:bg-active dark:hover:bg-dark_secondary pl-1 pr-2'>
                <label htmlFor='friends' className='flex items-center gap-2 cursor-pointer'>
                    <div className='w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center pure-svg '>
                        <Friends />
                    </div>
                    <div>
                        <h6 className='text-sm text-secondary font-semibold
                        dark:text-gray-200'>
                            Friends
                        </h6>
                        <p className='text-secondary_light text-[10px] dark:text-gray-400'>
                            Only your chirp friends
                        </p>
                    </div>
                </label>
                <div>
                    <input 
                    type="radio" 
                    id='friends' 
                    value='friends' 
                    name='storySetting' 
                    />
                </div>
            </div>
            <div className='flex items-center justify-between rounded-lg py-2 hover:bg-active dark:hover:bg-dark_secondary pl-1 pr-2'>
                <label 
                htmlFor='custom' 
                className='flex items-center gap-2 cursor-pointer'
                >
                    <div className='w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center pure-svg '>
                        <SingleUser />
                    </div>
                    <div>
                        <h6 className='text-sm text-secondary font-semibold dark:text-gray-200'>
                            Custom
                        </h6>
                        <p className='text-secondary_light text-[10px] dark:text-gray-400'>
                            Choose people to show your story to
                        </p>
                    </div>
                </label>
                <div>
                    <input type="radio" id='custom' value='custom' name='storySetting' className='text-xl'/>
                </div>
            </div>
            <div className='flex items-center justify-between rounded-lg py-2 hover:bg-active dark:hover:bg-dark_secondary pl-1 pr-2'>
                <label htmlFor='hideFrom' className='flex items-center gap-2 cursor-pointer'>
                    <div className='w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center pure-svg '>
                        <Friends />
                    </div>
                    <div>
                        <h6 className='text-sm text-secondary font-semibold dark:text-gray-200'>
                            Hide your story from
                        </h6>
                    </div>
                </label>
                <div>
                    <input type="radio" id='hideFrom' value='hideFrom' name='storySetting' className='text-xl'/>
                </div>
            </div>
           
        </div>
    )
}

export default StorySettings