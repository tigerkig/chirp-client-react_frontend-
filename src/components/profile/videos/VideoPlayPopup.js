import React from 'react'
import { Cross } from '../../../svgs'

const VideoPlayPopup = ({ video , setVideo , setShowVideoPlay }) => {
    
    return (
        <div>
            <div className='fixed top-0 left-0 w-screen h-screen bg-black z-50'>
                <div className='relative flex items-center justify-center'>
                    <div className=' absolute top-4 right-12 cursor-pointer'
                    onClick={() => {
                            setShowVideoPlay(false);
                            setVideo(null)
                    }}
                    >
                            <Cross />
                    </div>
                    <div className='w-full h-screen flex items-center justify-center'>
                        <video src={video?.url} autoPlay loop className='w-[300px] rounded-md'/>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default VideoPlayPopup