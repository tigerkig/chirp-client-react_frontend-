import React, { useContext } from 'react'
import { StoryPopupContext } from '../../context/storyPopupContext'
import { Gallery } from '../../svgs'

const CreateStory = () => {
    const { setCurrentStoryPopup } = useContext(StoryPopupContext)

    return (
        <div className='create-story-body flex gap-4 py-4'>
            <div 
            className='flex-1 bg-pure dark:bg-dark_primary rounded-lg shadow-2 h-[200px] sm:h-[350px] flex items-center justify-center flex-col gap-2 cursor-pointer border border-transparent hover:border-primary'
            >
                <div className='w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center pure-svg'>
                    <Gallery />
                </div>
                <p className='text-dark dark:text-light text-[13px] sm:text-base font-semibold'>
                    Create a photo story
                </p> 
            </div>
            <div className='flex-1 bg-pure dark:bg-dark_primary rounded-lg shadow-2 h-[200px] sm:h-[350px]
            flex items-center justify-center border border-transparent hover:border-primary cursor-pointer flex-col gap-2'
            onClick={() => setCurrentStoryPopup('createText')}>
                <div className='w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center text-pure font-semibold text-lg'>
                    <span>Aa</span>
                </div>
                <p className='text-dark dark:text-light text-[13px] sm:text-base font-semibold'>
                    Create text story
                </p> 
            </div>
        </div>
    )
}

export default CreateStory