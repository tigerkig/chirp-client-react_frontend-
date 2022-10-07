import React, { useState } from 'react'
import { userData } from '../../../data/User'
import { Comment , DotsMenu, Like , Share } from '../../../svgs';
import { commentsData } from '../../../data/comments';
import Comments from './comments';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = ({ post }) => {
    const [showMoreText , setShowMoreText] = useState(false);
    const [showLessBtn , setShowLessBtn] = useState(false);
    const [showMoreBtn , setShowMoreBtn] = useState(true);
    const [showComment , setShowComment] = useState(false);
    const { user : { user } } = useSelector(state => state.auth);

    const handleSeeMoreClick = () => {
        setShowMoreText(true);
        setShowMoreBtn(false);
        setShowLessBtn(true);
    }

    const handleShowLessClick = () => {
        setShowMoreText(false);
        setShowMoreBtn(true);
        setShowLessBtn(false);
    }
   
    const comments = commentsData.filter(comment => comment?.post === post?.id)

    return (
        <div className='post-container'>
            <div className='post w-full h-auto bg-pure dark:bg-dark_secondary sm:rounded-md shadow-sm p-4 flex flex-col gap-4'>
                <div className='post-header flex items-center justify-between'>
                    <div className='flex gap-2 text-sm '>
                        <div className="w-[40px] h-[40px] rounded-full">
                            <img src={user?.profileImage} alt={user?.firstName}  className='w-full h-full object-cover rounded-full'/>
                        </div>
                        <Link to='/profile'>
                            <div className='text-dark dark:text-light font-medium'>
                                <p>{user?.firstName} {user?.lastName}</p>
                                <span className='text-[11px] text-secondary_light'>3 hours ago</span>
                            </div>
                        </Link>
                    </div>
                    <div className=''>
                        <div className="small-svg-2">
                            <DotsMenu />
                        </div>
                    </div>
                </div>
                {
                    post?.text?.length > 0 && 
                    <div className='post-text text-[13px]  sm:text-sm text-secondary dark:text-light'>
                       {
                            post?.text?.length > 250 
                            ?
                            <>
                                <span>{post?.text?.slice(0,250)}</span>
                                {
                                    showMoreBtn && 
                                    <>
                                        <span>...</span>
                                        <span onClick={handleSeeMoreClick} 
                                        className='text-primary dark:text-light font-medium cursor-pointer'> 
                                           &nbsp; See More
                                        </span>                                    
                                    </>
                                }
                                {
                                    showMoreText && <span> {post?.text?.slice(250)}</span>
                                }
                                {
                                    showLessBtn && 
                                    <span onClick={handleShowLessClick} 
                                    className='text-primary dark:text-light font-medium cursor-pointer'>
                                        &nbsp; Show Less
                                    </span>
                                }
                            </>
                            : 
                            <>
                                <span>{post?.text}</span>
                            </>
                       }
                    </div>
                }
                {
                    post?.media?.length > 0 && 
                    <div className='post-images-grid grid grid-cols-2 w-full gap-2'>
                        {
                            post.media.map((image , i) => (
                                <div className='' key={i}>
                                   <img src={`https://chirp.shopziaa.com/${image.filename}`} className='rounded-md' alt='Post'/>     
                                </div>
                            ))
                        }
                    </div>
                }

                <div className="post-footer w-full flex items-center justify-between  gap-2 sm:gap-4 mt-4">
                    <div className='flex items-center justify-center text-dark dark:text-light text-sm gap-3  rounded-full flex-1 '>
                        <div className="small-svg-2 bg-primary p-2 sm:py-3 sm:px-3 rounded-full">
                            <Like color='#fff'/>
                        </div>
                        <span>
                            {post?.likes} Likes
                        </span>
                    </div>
                    <div className='flex items-center justify-center text-dark dark:text-light text-sm gap-3  rounded-full flex-1-5 cursor-pointer'
                    onClick={() => setShowComment(!showComment)}>
                        <div className="small-svg-2">
                            <Comment />
                        </div>
                        <span>
                            {post?.comments} Comments
                        </span>
                    </div>
                    <div className='flex items-center justify-center text-dark dark:text-light text-sm gap-3 rounded-full flex-1 '>
                        <div className="small-svg-2">
                            <Share />
                        </div>
                        <span>
                            Share
                        </span>
                    </div>
                    
                </div>
            </div>
            {
                showComment && <Comments comments={comments}/>
            }
        </div>
    )
}

export default Post;