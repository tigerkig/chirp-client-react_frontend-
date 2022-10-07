import React, { useContext, useRef, useState } from 'react'
import { StoryPopupContext } from '../../context/storyPopupContext'
import { CircleCross, Settings } from '../../svgs'
import useClickOutside from '../../utils/clickOutside';
import StorySettings from './StorySettings';

const Header = () => {
    const settingsRef = useRef(null);
    const { setShowStoryPopup , setCurrentStoryPopup } = useContext(StoryPopupContext);
    const [showSettings , setShowSettings] = useState(false);

    useClickOutside(settingsRef , () => setShowSettings(false));

    return (
        <div className='create-story-header w-full flex items-center justify-between py-2'>
            <div ref={settingsRef} className='relative'>
                <div className="setting-svg cursor-pointer " 
                onClick={() => setShowSettings(!showSettings)}>
                    <Settings />
                </div>
                {
                    showSettings && 
                    <div className='absolute top-[110%] left-0 z-10 '>
                        <StorySettings />
                    </div>
                }
            </div>
            <div className='text-xl font-bold text-primary dark:text-light'>
                <h3>Create Story</h3>
            </div>
            <div 
            className="cursor-pointer" 
            onClick={() => {
                setShowStoryPopup(false);
                setCurrentStoryPopup('create')
            }}
            >
                <CircleCross />
            </div>
        </div>
    )
}

export default Header