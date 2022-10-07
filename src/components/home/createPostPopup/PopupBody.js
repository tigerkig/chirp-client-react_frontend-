import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaceEmoji, PostColors } from '../../../svgs';
import Picker from "emoji-picker-react";
import useClickOutside from '../../../utils/clickOutside';
import PostBackgrounds from './PostBackgrounds';
import { PostViewContext } from '../../../context/postViewContext';
import BackgroundView from './backgroundView';
import MediaView from './mediaView';

const PopupBody = ({ postText , setPostText , postImages , setPostImages , postGif , setPostGif , media , setMedia , background , setBackground }) => {
    const emojiRef = useRef(null);
    const postTextRef = useRef(null);
    const [showEmoji , setShowEmoji] = useState(false)
    const { 
        currentPostView  , showBgs , setShowBgs 
    } = useContext(PostViewContext)

    useClickOutside(emojiRef , () => setShowEmoji(false));

    useEffect(() => {
        postTextRef?.current?.focus();
    }, [currentPostView])

    const handleEmojiClick = ( e , { emoji }) => {
        const ref = postTextRef?.current;
        ref?.focus();
        const start = postText.substring(0,ref.selectionStart);
        const end = postText.substring(ref.selectionStart);
        const newText = start + emoji + end ;
        setPostText(newText)
    }

    return (
        <div className="popup-body flex flex-col gap-4 relative">
            <div className="popup-body-header flex items-center gap-3">
                <div className="circle-img">
                    <img src='/users/user-1.jpg' alt='user' />
                </div>
                <span className='text-black dark:text-gray-300 font-medium text-base'>Umair Ahmad</span>
            </div>
            <div className={`popup-body-body  w-full overflow-auto addScroll
                ${
                    currentPostView === 'background' 
                    ?   
                        'h-[250px]'
                    : 
                    currentPostView === 'text'
                    ? 
                        'h-[120px]'
                    : 
                        currentPostView === 'media'
                    ? 
                        'min-h-[250px]'
                    : 
                        'h-[100px]'
                }
            `}
            >
                {
                    currentPostView === 'text'
                    ? 
                    <textarea 
                    ref={postTextRef}
                    className='w-full h-[95%] bg-transparent border-none outline-none text-base text-secondary  placeholder:text-secondary_light dark:text-light placeholder:text-xl placeholder:font-light resize-none addScroll'
                    rows="5" 
                    value={postText}
                    onChange={ e => setPostText(e.target.value)}
                    placeholder='What’s going on. Umair?'
                    />
                    :
                    currentPostView === 'background'
                    ? 
                        <BackgroundView 
                        postText={postText} 
                        setPostText={setPostText}
                        background={background}
                        setBackground={setBackground}
                        />
                    : 
                        currentPostView === 'media'
                    ? 
                        <MediaView 
                        postText={postText} 
                        setPostText={setPostText}
                        handleEmojiClick={handleEmojiClick}
                        postTextRef={postTextRef}
                        postImages={postImages}
                        setPostImages={setPostImages}
                        postGif={postGif}
                        setPostGif={setPostGif}
                        media={media}
                        setMedia={setMedia}
                        />
                    :   ''
                }

            </div>
            {
                currentPostView !== 'media' && 
                <div className="popup-body-footer w-full flex items-center justify-between relative h-[40px]">
                    <div className='flex items-center gap-1'>
                        <div onClick={() => setShowBgs(!showBgs)} className='post-bg-btn'>
                            <PostColors />
                        </div>
                        {
                            showBgs && 
                            <div className='translate-y-[1px] w-full'>
                                <PostBackgrounds />
                            </div>
                        }
                    </div>
                    <div ref={emojiRef} className='filter-svg'>
                        <div 
                        onClick={() => setShowEmoji(!showEmoji)}
                        
                        >
                            <FaceEmoji />
                        </div>
                        {
                            showEmoji && 
                            <div className='absolute bottom-10 right-[-55%] translate-x-[-50%]'>
                                <Picker onEmojiClick={handleEmojiClick} />
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default PopupBody