import React, { useState } from 'react'
import { videoData } from './videoData';
import VideoItem from './VideoItem';
import VideoPlayPopup from './VideoPlayPopup';

const Videos = () => {
    const [showVideoPlay , setShowVideoPlay] = useState(false);
    const [video , setVideo] = useState();

    const handleVideoClick = (e , id) => {
        setShowVideoPlay(true)
        const newVideo = videoData.filter(video => video.id === id)[0]
        setVideo(newVideo);
    }

    return (
        <div>
            <div className='bg-pure dark:bg-dark_secondary rounded-lg shadow-2 sm:p-4 p-3 flex flex-col gap-4'>
                <div className='text-primary dark:text-light text-base font-semibold'>
                    <span>Videos</span>
                </div>
                <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 '>
                    {
                        videoData?.map((video , i) => (
                            <VideoItem video={video} key={i} handleVideoClick={handleVideoClick}/>
                        ))
                    }

                </div>
            </div>
            {
                showVideoPlay && 
                <VideoPlayPopup 
                video={video}
                setVideo={setVideo}
                setShowVideoPlay={setShowVideoPlay}
                />
            }
        </div>
    )
}

export default Videos