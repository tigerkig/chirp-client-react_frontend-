import './styles.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { AddImage, Cross, FaceEmoji } from '../../../../svgs';
import Picker from "emoji-picker-react";
import useClickOutside from '../../../../utils/clickOutside';
import { PostViewContext } from '../../../../context/postViewContext';
import ImagesPreview from './ImagesPreview';

const MediaView = ({ 
    postText , setPostText , handleEmojiClick , postTextRef , postImages , setPostImages , postGif  , setPostGif , media , setMedia 
}) => {
    const emojiRef = useRef();
    const inputImgRef = useRef();
    const [showEmoji , setShowEmoji] = useState(false);
    const [postVideos , setPostVideos] = useState([]);
    const { setCurrentPostView , setPostBg } = useContext(PostViewContext);
    useClickOutside(emojiRef , () => setShowEmoji(false))

    useEffect(() => {
        postTextRef.current?.focus();
    }, [postTextRef])


    const handleImagesChange = (e) => {
        let files = Array.from(e.target.files);
        files.forEach((file) => {
            setMedia((media) => [...media , file])
            const reader = new FileReader();
                if(file.type.startsWith('video')){
                    console.log('video type' , file)
                    reader.readAsDataURL(file);
                    reader.onload = (readerEvent) => {
                        setPostVideos((videos) => [...videos, readerEvent.target.result]);
                    }
                }else{
                    reader.readAsDataURL(file);
                    reader.onload = (readerEvent) => {
                    setPostImages((images) => [...images, readerEvent.target.result]);
                }
                
            // if (img.size > 1024 * 1024 * 10) {
            //     alert(`${img.name} size is too large max 5mb allowed.`);
            //     files = files.filter((item) => item.name !== img.name);
            //     return;
            // } else {
            //     const reader = new FileReader();
            //     reader.readAsDataURL(img);
            //     reader.onload = (readerEvent) => {
            //         setPostImages((images) => [...images, readerEvent.target.result]);
            //     };
            // 
        }
        });
      };


    return (
        <div className='createPost-media-view'>
            <div className='w-full h-full flex flex-col gap-2'>
                <div className='flex justify-between pr-1'>
                    <textarea 
                    ref={postTextRef}
                    className='w-full h-[70px] bg-transparent border-none outline-none text-base text-secondary  placeholder:text-secondary_light placeholder:text-lg placeholder:font-light resize-none addScroll dark:text-light'
                    rows="5" 
                    value={postText}
                    onChange={ e => setPostText(e.target.value)}
                    placeholder='What’s going on. Umair?'
                    />
                    <div ref={emojiRef}>
                        <div className="medium-svg cursor-pointer translate-y-[-2] "
                        onClick={() => setShowEmoji(!showEmoji)}
                        >
                            <FaceEmoji />           
                        </div>
                        {
                            showEmoji && 
                            <div className='absolute right-[-50%] translate-x-[-50%] z-20'>
                                <Picker onEmojiClick={handleEmojiClick}/>
                            </div>
                        }
                    </div>
                </div>

                <div 
                className={`w-full ${postGif ? 'h-[270px]' : 'h-[170px] '}  relative border-gray-200 rounded-md `}
                >
                    <input 
                    type="file" 
                    hidden 
                    multiple
                    ref={inputImgRef}
                    onChange={handleImagesChange}
                    />
                   {
                        postImages?.length > 0 || postGif 
                        ?
                            <ImagesPreview  
                            postImages={postImages}
                            setPostImages={setPostImages}
                            inputImgRef={inputImgRef}
                            postGif={postGif}
                            setPostGif={setPostGif}
                            postVideos={postVideos}
                            setPostVideos={setPostVideos}
                            /> 
                        : 
                            <div 
                            className='w-full min-h-[170px] h-full bg-active dark:bg-dark_secondary flex flex-col justify-center items-center rounded-md gap-1 cursor-pointer relative'
                            onClick={() => inputImgRef.current?.click()}
                            >
                                <div className='absolute right-2 top-2'>
                                    <div 
                                    className="small-svg-2"  
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setMedia([]);
                                        setPostGif('');
                                        setPostBg('');
                                        setCurrentPostView('text')
                                    }}
                                    >
                                        <Cross />
                                    </div>
                                </div>
                                <div className="medium-svg">
                                    <AddImage />
                                </div>
                                <h3 className='text-base text-primary font-semibold dark:text-gray-200'>
                                    Add Photos/Videos
                                </h3>
        
                            </div>
                        
                   }
                </div>
            </div>
        </div>
    )
}

export default MediaView;

