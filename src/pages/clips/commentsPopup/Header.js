import React from 'react'

const Header = ({ setShowCommentsPopup }) => {
    const handleClick = () => {
        setShowCommentsPopup(false);
    }

    return (
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-2 text-[15px] text-dark dark:text-light'>
                <p className='font-semibold'>Comments</p>
                <span className='text-secondary_light'>347</span>
            </div>
            <div>
                <div className="w-[17px] h-[17px] filter-brown cursor-pointer" onClick={handleClick}>
                    <img src='/svgs/cancel.svg' alt='like' className='w-full h-full'/>
                </div>
            </div>
        </div>
    )
}

export default Header