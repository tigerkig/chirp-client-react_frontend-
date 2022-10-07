import React from 'react'
import { useState } from 'react'

const AddComment = () => {
    const [showBtns , setShowBtns] = useState(false);

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-4'>
                <div>
                    <div className="circle-img">
                        <img src='/users/user-1.jpg' alt='Umair Ahmad' />
                    </div>
                </div>
                <div className='w-full'>
                    <input 
                    type="text"
                    placeholder='Add comment'
                    className=' outline-none pb-1 w-full border-b-2 bg-transparent dark:text-gray-200 dark:border-b-gray-600 border-b-secondary_light placeholder:text-secondary dark:placeholder:text-gray-400 dark:focus:border-b-light'
                    onFocus={() => setShowBtns(true)}
                    />
                </div>
            </div>
            {
                showBtns && 
                <div className='flex items-center justify-end gap-4 sm:text-[15px] text-sm'> 
                    <div onClick={() => setShowBtns(false)}>
                        <button className='text-dark dark:text-gray-400'>
                            Cancel
                        </button>
                    </div>
                    <div>
                        <button className='btn-primary'>
                            Comment
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddComment