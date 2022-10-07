import React from 'react'
import { Cross , Watch } from '../../../../svgs'

const ImagesPreview = ({ postImages , setPostImages , inputImgRef , postGif , setPostGif , setPostVideos , postVideos}) => {

    const handleRemoveClick = img => {
        setPostImages(prev => prev.filter(el => el !== img ))
    } 
    const handleVideoRemoveClick = (video) => {
        setPostVideos(prev => prev.filter(el => el !== video ))
    }

    return (
        <div className='w-full h-full relative'>
            <div className='absolute right-2 top-2 z-10'>
                <div
                title='clear all' 
                className="small-svg-2 cursor-pointer"  
                onClick={(e) => {
                    setPostVideos([])
                    setPostImages([]);
                    setPostGif(null)
                }}
                >
                    <Cross />
                </div>
            </div>
            {
                !postGif &&
                <div className='absolute left-2 top-2 bg-pure rounded-md py-1 px-2 text-sm cursor-pointer z-10'
                onClick={() => inputImgRef.current.click()}>
                    Add Photo
                </div>
            }
            
            {
                postGif 
                ? 
                    <div className='w-full h-[250px]'>
                        <img src={postGif} alt='Gif' className='w-full h-full object-cover' />
                    </div>
                : 
                    <div className={`images__grid gap-2
                    ${postImages.length === 1 ? 'preview1' 
                    : postImages.length === 2 ? 'preview2'
                    : postImages.length === 3 ? 'preview3'
                    : postImages.length === 4 ? 'preview4'
                    : postImages.length === 5 ? 'preview5'
                    : postImages.length % 2 !== 0 ? 'preview__odd'
                    : 'preview__even'}
                    
                    `}>
                        {
                            postImages?.map((img , i) => (
                               
                                <div key={i} className='relative'>
                                
                                <img src={img} alt="post data" />
                                <span className='remove-img absolute bg-pure bottom-2 right-2 rounded-md text-xs px-2 py-1 '
                                onClick={() => handleRemoveClick(img)}>remove</span>
                                </div>
                            ))
                        }
                        {
                            postVideos?.length > 0 && postVideos?.map((video, i) => (
                                <div key={i} className='relative'>
                                    <video src={video}  />
                                    <span className='remove-img absolute bg-pure bottom-2 right-2 rounded-md text-xs px-2 py-1 '
                                    onClick={() => handleVideoRemoveClick(video)}>remove</span>
                                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                        <Watch />
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
            }
                
          
        </div>
    )
}

export default ImagesPreview