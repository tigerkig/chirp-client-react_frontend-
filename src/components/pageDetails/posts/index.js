import React from 'react'
import { postData } from '../../../data/post'
import CreatePost from '../../home/createPost'
import Post from '../../home/posts/Post'

const Posts = () => {
    return (
        <div className='profile-posts w-full flex flex-col gap-4'>
            <CreatePost />
            {
                postData?.map((post , i) => (
                    <Post key={i} post={post} />
                ))
            }
        </div>
    )
}

export default Posts