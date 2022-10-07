import React, { useContext, useEffect, useRef, useState } from 'react'
import { StoryPopupContext } from '../../context/storyPopupContext';
import {toast} from 'react-toastify';
import { ClipLoader } from'react-spinners';

const TextStory = () => {
    const textRef = useRef(null);
    const { setShowStoryPopup } = useContext(StoryPopupContext)
    const [loading , setLoading] = useState(false);

    useEffect(() => {
        textRef?.current?.focus();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowStoryPopup(false);
            toast.success('Story Created successfully.')
        }, 2000)
    }
    return (
        <div className='w-full h-[420px] flex items-center justify-center'>
            <form onSubmit={handleSubmit}>
                <div className='bg-[#5843BE] rounded-lg py-4 px-2 w-[250px] h-[370px] flex items-center justify-center'>
                    <textarea 
                    className='resize-none text-base text-pure bg-transparent outline-none border-none placeholder:text-white'
                    placeholder='Write a text here...'
                    ref={textRef}
                    />
                </div>
                <button type="submit" className='btn-primary w-full mt-4'>
                    {loading ? <ClipLoader size={20} color="#fff" /> : "Create"}
                </button>
            </form>
        </div>
    )
}

export default TextStory