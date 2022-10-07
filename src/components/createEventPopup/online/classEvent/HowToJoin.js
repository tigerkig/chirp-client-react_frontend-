import React, { useState } from 'react'

const HowToJoin = () => {
    const [showLinkField , setShowLinkField] = useState(false)

    return (
        <div className='flex flex-col gap-4'>
            <h3 className='text-primary text-lg dark:text-gray-300 font-medium'>How Will Students Join?</h3>
            <div className='flex flex-col gap-1 py-4'>
                <div className='flex items-center justify-between text-dark font-medium hover:bg-active dark:hover:bg-dark_primary rounded-lg py-2 pr-1 pl-2 cursor-pointer'>
                    <label htmlFor="room" className='cursor-pointer dark:text-gray-400'>
                        Interact in a video room
                    </label>
                    <input type="radio" name="join" id="room" 
                    onChange={(e) => {
                        if(e.target.checked){
                            setShowLinkField(false)
                        }
                    }}/>
                </div>
                <div className='flex items-center justify-between text-dark font-medium hover:bg-active dark:hover:bg-dark_primary rounded-lg py-2 pr-1 pl-2 cursor-pointer'>
                    <label htmlFor="link" className='cursor-pointer dark:text-gray-400'>
                        External Link
                    </label>
                    <input type="radio" name="join" id="link" onChange={(e) => {
                        if(e.target.checked){
                            setShowLinkField(true)
                        }
                    }}/>
                </div>
                {
                    showLinkField && 
                    <div className='mt-4'>
                        <input 
                        type="text" 
                        placeholder='Link Url'
                        className='border border-gray-300 focus:outline-primary p-2.5 text-dark placeholder:text-secondary_light rounded-md w-full dark:bg-dark_primary dark:border-gray-500 dark:outline-none dark:text-light'
                        />
                    </div>
                }
            </div>
            <div>
                <button className="btn-primary w-full">
                    Create
                </button>
            </div>
        </div>
    )
}

export default HowToJoin