import React from 'react'
import { postData } from '../../../data/post'
// import Post from '../../home/posts/Post'
import WatchItem from './WatchItem'

const Videos = () => {
    return (
        <div className=' profile-posts w-full sm:w-[95%] flex flex-col gap-4'>
            {
                postData?.map((post , i) => (
                    <WatchItem key={i} post={post} />
                ))
            }
        </div>
    )
}

export default Videos