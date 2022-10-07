// import './styles.css';
import ProfileAbout from './about';
import { postData } from '../../../data/post';
import Post from '../../home/posts/Post'
import ProfileGallery from './gallery';
import CreatePost from '../../home/createPost';

const Featured = () => {
    return (
        <div>
            <div className='profile-posts-container w-full flex gap-4 mt-4 relative'>
                <div className='profile-about flex flex-col gap-4 '>
                    <ProfileAbout />
                    <ProfileGallery />
                </div>
                <div className='profile-posts w-full flex flex-col gap-4'>
                    <CreatePost />
                    {
                        postData?.map((post , i) => (
                            <Post key={i} post={post} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Featured;