import React, { useContext } from 'react'
import { CreateRoomContext } from '../../context/createRoomContext';
import { CircleCross } from '../../svgs';

const Header = () => {
    const { setShowRoomPopup } = useContext(CreateRoomContext);

    return (
        <div className='create-story-header w-full flex items-center justify-between py-2'>
        
            <div className='text-xl font-bold text-primary dark:text-light text-center w-full'>
                <h3>Create Room</h3>
            </div>
            <div 
            className="cursor-pointer" 
            onClick={() => {
                setShowRoomPopup(false);
               
            }}
            >
                <CircleCross />
            </div>
        </div>
    )
}

export default Header;