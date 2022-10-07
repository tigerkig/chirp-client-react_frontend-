import React, { useContext } from 'react'
import { PopupContext } from '../../../context/popupContext'
import { PostViewContext } from '../../../context/postViewContext';
import { CircleCross } from '../../../svgs'

const PopupHeader = ({ headerText = 'Create Post' , setMedia , setPostGif }) => {
    const { setShowCreatePostPopup , currentPopup ,setCurrentPopup} = useContext(PopupContext);
    const { setCurrentPostView , setPostBg  } = useContext(PostViewContext)

    return (
        <div className="popup-header w-full bg-pure dark:bg-dark_primary flex items-center justify-center relative border-b border-b-primary dark:border-b-secondary_light pb-4 filter-svg">
            <h3 className='font-semibold text-primary dark:text-gray-300 text-base sm:text-xl '>
                {headerText}
            </h3>
            <div className='absolute right-0 cursor-pointer'
            onClick={() => {
                setShowCreatePostPopup(false);
                setCurrentPopup('createPost');
                setPostBg('');
                setPostGif('');
                setMedia([]);
                setCurrentPostView('text')
            }}>
                <CircleCross />
            </div>
            {
                currentPopup !== 'createPost' && 
                <div className='absolute left-0  text-primary cursor-pointer w-[35px] h-[35px] bg-light rounded-full flex items-center justify-center '
                onClick={() => setCurrentPopup('createPost')}>
                    <img src='/leftArrow.png' alt='Back' className='w-full max-w-[25px] h-[25px]'/>
                </div>
            }
        </div>
    )
}

export default PopupHeader