import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CommentsPopup from './commentsPopup';

const Clip = ({ src }) => {
    const videoRef = useRef(null);
    const [playing , setPlaying] = useState(false);
    const [isMute , setIsMute] = useState(false);
    const [visible , setVisible] = useState(false);
    const [showCommentsPopup , setShowCommentsPopup] = useState(false);

    useEffect(() => {
        if(visible){
            videoRef.current.play();
            setPlaying(true);
        }else{
            videoRef.current.pause();
            setPlaying(false);
        }
    }, [visible])

    const handleVideoClick = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    const handleSpeakerClick = () =>{
       if(isMute){
            videoRef.current.defaultMuted = false;
            videoRef.current.muted = false;
            setIsMute(false)
       }else {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            setIsMute(true)
       }
    }

    return (
       <VisibilitySensor onChange={(isVisible) => {
            setVisible(isVisible)
       }}>
            <div className='clip'>
                <div className="clip-video-container">
                    <video
                    ref={videoRef}
                    src={src} 
                    loop 
                    className='clip-video'
                    onClick={handleVideoClick} 
                    />
                    <div className="clip-header">
                        <div className="w-[20px] h-[20px] cursor-pointer" onClick={handleVideoClick}>
                            {
                                playing 
                                ? 
                                    <img src='/svgs/pause.svg' alt='like' className='w-full h-full'/>
                                :
                                    <img src='/svgs/play2.svg' alt='like' className='w-full h-full'/>
                            }
                        </div>
                        <div className="w-[20px] h-[20px] cursor-pointer"
                        onClick={handleSpeakerClick}>
                            {
                                isMute 
                                ? 
                                    <img src='/svgs/mute.svg' alt='like' className='w-full h-full'/>
                                :
                                    <img src='/svgs/audio.svg' alt='like' className='w-full h-full'/>
                            }
                        </div>
                    </div>
                    <div className='clip-owner-details w-full flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className="w-[36px] h-[36px] rounded-full">
                                <img src='/users/user-1.jpg' alt='Clip owner' className="w-[36px] h-[36px] rounded-full"/>
                            </div>
                            <div className='text-light text-sm'>
                                <h4>Umair Ahmad</h4>
                                <p className='text-gray-300 text-xs'>Vic2424</p>
                            </div>
                        </div>
                        <div className='mr-5'>
                            <button className="bg-primary py-1 px-4 text-[13px] rounded-md text-light hover:bg-primaryHover cursor-pointer">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                <div className='clip-likes-container'>
                    <div>
                        <div className='dark:text-light text-xs sm:text-sm flex flex-col gap-2 items-center' >
                            <div className="w-[25px] h-[25px] filter-brown">
                                <img src='/svgs/like.svg' alt='like' className='w-full h-full'/>
                            </div>
                            <p>2.1k</p>
                        </div>
                        <div className='dark:text-light text-xs sm:text-sm flex flex-col gap-1 items-center '>
                            <div className="w-[25px] h-[25px] filter-brown ">
                                <img src='/svgs/dislike.svg' alt='like' className='w-full h-full'/>
                            </div>
                            <p>114</p>
                        </div>
                        <div className='dark:text-light text-xs sm:text-sm flex flex-col gap-2 items-center' >
                            <div className="w-[25px] h-[25px] filter-brown cursor-pointer"
                            onClick={() => setShowCommentsPopup(true)}>
                                 <img src='/svgs/comment.svg' alt='like' className='w-full h-full'/>
                            </div>
                            <p>358</p>
                        </div>
                        <div className='dark:text-light text-xs flex flex-col gap-2 items-center'>
                            <div className="w-[25px] h-[25px] filter-brown">
                                <img src='/svgs/share.svg' alt='like' className='w-full h-full'/>
                            </div>
                            <p>Share</p>
                        </div>
                    </div>
                </div>
                {
                    showCommentsPopup && 
                    <CommentsPopup 
                    showCommentsPopup={showCommentsPopup} 
                    setShowCommentsPopup={setShowCommentsPopup}    
                    />
                }
            </div>
       </VisibilitySensor>
    )
}

export default Clip