import React, { useContext } from 'react'
import { PopupContext } from '../../../context/popupContext'
import { PostViewContext } from '../../../context/postViewContext'
import { DotsMenu, FaceEmojiFill, Gallery, Gif, Location, TagFriend } from '../../../svgs'

const AddToYourPost = ({ postGif }) => {
    const { setCurrentPopup } = useContext(PopupContext)
    const { postBg , setPostBg , setCurrentPostView } = useContext(PostViewContext)

    const handleClick = (popup) => {
        setCurrentPopup(popup)
    }
    
    return (
        <div className="add-to-post border border-primary dark:border-secondary_light py-3 px-2 flex items-center justify-between rounded-lg">
            <p className='text-secondary_light text-lg'>Add to your post</p>
            <div className='flex items-center gap-6'>
                <button
                disabled={postBg} 
                className={`${postBg ? 'disable-svg' : ''}`}
                onClick={() => {
                    setCurrentPostView('media');
                    setPostBg(null);
                }}
                >
                    <Gallery />
                </button>
                <button onClick={() => handleClick('tagPeople')}>
                    <TagFriend />
                </button>
                <button onClick={() => handleClick('feelings')}>
                    <FaceEmojiFill />
                   
                </button>
                <button onClick={() => handleClick('location')}>
                    <Location />
                </button>
                <button onClick={() => handleClick('gifs')}>
                    <Gif />
                </button>
                <div className='popup-dot-menu' onClick={() => handleClick('addToPost')}>
                    <DotsMenu />
                </div>
            </div>
        </div>
    )
}

export default AddToYourPost