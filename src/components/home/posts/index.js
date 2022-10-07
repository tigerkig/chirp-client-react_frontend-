import './styles.css';
import { postData } from "../../../data/post"
import Post from "./Post"
import { usePostsContext } from '../../../context/postsContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners'

const Posts = () => {
    const { posts , setPosts } = usePostsContext() ;
    const { user : { user , token } } = useSelector(state => state.auth);
    const [loading , setLoading] = useState(false);

    // useEffect(() => {
    //     setPosts(postData);
    // }, []);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const { data : { data : { posts } } } = await axios.get('https://chirp.shopziaa.com/api/post' , {
                    headers : {
                        authorization : `Bearer ${token}`
                    }
                });
                setLoading(false);
                setPosts(posts);
                
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
        fetchPosts();
    }, [])
    console.log(posts)
    return (
        <div className='posts-container flex flex-col gap-4'>
            {
                loading 
                ?
                    <div className='flex items-center justify-center mt-4'>
                        <HashLoader size={30} color="#850E10"/>
                    </div>
                :
                posts?.map((post , i) => (
                    <Post  key={i} post={post}/>
                )) 

            }
        </div>
    )
}

export default Posts