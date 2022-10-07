import React from 'react'

const VideoItem = ({ video , handleVideoClick }) => {
    return (
        <div className='h-[250px] rounded-md ' 
        >
            <video 
            src={video?.url}
            className='rounded-md h-full w-full object-cover cursor-pointer' 
            onClick={(e) => handleVideoClick( e , video?.id)}
            />
        </div>
    )
}

export default VideoItem