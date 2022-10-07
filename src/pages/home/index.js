import './styles.css';
import Navbar from '../../components/navbar'
import Stories from '../../components/home/stories';
import CreatePost from '../../components/home/createPost';
import Posts from '../../components/home/posts';
import LeftBar from '../../components/home/leftBar';
import RightBar from '../../components/home/rightBar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePostsContext } from '../../context/postsContext';

const Home = () => {
    const navigate = useNavigate();
    const { setPosts } = usePostsContext();
    const { user : { user , token } } = useSelector(state => state.auth);
    
    useEffect(() => {
        if(!user){
            toast.error('Please login to your account.');
            navigate('/login')
        }
    }, []);

    

    return (
        <>
            <Navbar />
            <div className='home margin bg-light dark:bg-dark_primary'>
                <div className='w-full flex justify-between py-4 px-0 sm:px-4'>
                    <div className='home-left'>
                        <LeftBar />
                    </div>
                    <div className=' home-middle flex flex-col gap-4 '>
                        <Stories /> 
                        <CreatePost />
                        <Posts />
                        
                    </div>
                    <div className='home-right'>
                        <RightBar />
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Home