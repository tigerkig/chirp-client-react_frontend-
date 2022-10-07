import './styles.css';
import Comment from "./Comment"
import { useState } from 'react';
import { Send } from '../../../../svgs';

const Comments = ({ comments }) => {
    const [comment , setComment] = useState('');

    return (
        <div className="comments-container">
            <div className="comments addScroll w-full bg-pure dark:bg-dark_secondary p-2 sm:p-4 shadow-md mt-1 rounded-md flex flex-col gap-6">
                <div className='comment-form-container flex gap-4 '>
                    <div className='circle-img'>
                        <img src="/users/user-1.jpg" alt="User" />
                    </div>
                    <form className='comment-form w-full'>
                        <div className='border border-primary dark:border-light dark:border-gray-400 rounded-md py-1.5 px-2 w-full flex items-center justify-between text-sm sm:text-base'>
                            <input 
                            type="text"
                            value={comment}
                            onChange={ e => setComment(e.target.value)}  
                            placeholder='Type comment...'
                            className='bg-transparent border-none outline-none dark:text-light'
                            />
                            <button type="submit">
                                <Send />
                            </button>
                        </div>
                    </form>
                </div>
                {
                    comments.map((comment, key) => (
                        <Comment comment={comment} key={key} />
                    ))
                }
            </div>
        </div>
    )
}

export default Comments