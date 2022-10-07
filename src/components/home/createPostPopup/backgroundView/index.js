import { useContext, useEffect, useRef } from 'react';
import { PostViewContext } from '../../../../context/postViewContext';
import './styles.css';

const BackgroundView = ({ postText , setPostText  }) => {
    const bgViewRef = useRef();
    const textRef = useRef(null);
    const { postBg } = useContext(PostViewContext);

    useEffect(() => {
        textRef.current?.focus();
        bgViewRef.current.style.backgroundImage = `url(${postBg?.url})`;
    }, [postBg])

    const handleChange = e => {
        setPostText(e.target.value);   
    }

    return (
        <div className='w-full h-[400px] bg-view' ref={bgViewRef}>
            <div className='w-full h-full flex items-center justify-center sm:p-4 p-2'>
                <textarea 
                maxLength={120}
                ref={textRef}
                value={postText}
                onChange={ handleChange }
                placeholder="What's going on. Umair?"
                className='bg-transparent border-none outline-none resize-none w-full text-center text-pure placeholder:text-2xl dark:text-light placeholder:text-pure h-[200px]'
                />
            </div>
        </div>
    )
}

export default BackgroundView