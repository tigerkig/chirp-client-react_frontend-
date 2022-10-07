import './styles.css';
import { useContext, useRef } from 'react'
import { StoryPopupContext } from '../../context/storyPopupContext';
import useClickOutside from '../../utils/clickOutside';
import Header from './Header';
import CreateStory from './CreateStory';
import TextStory from './TextStory';

const CreateStoryPopup = () => {
    const popup = useRef(null);
    const { setShowStoryPopup , currentStoryPopup , setCurrentStoryPopup } = useContext(StoryPopupContext)

    useClickOutside(popup , () => {
        setShowStoryPopup(false);
        setCurrentStoryPopup('create');
    })

    return (
        <div className='bg-blur'>
            <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                <div 
                className='popup w-full sm:w-[600px] h-auto bg-pure dark:bg-dark_secondary rounded-lg p-4 ' 
                ref={popup}
                >
                    <Header />
                    <div className="line bg-primary w-full h-[1px] mt-2 mb-4"></div>
                    {
                        currentStoryPopup === 'create'
                        ? 
                            <CreateStory />
                        :
                        currentStoryPopup === 'createText'
                        ? 
                            <TextStory />
                        : ''
                    }

                </div>
            </div>
        </div>
    )
}

export default CreateStoryPopup;