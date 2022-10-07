import { useContext, useRef, useState } from 'react';
import './styles.css'; 
import useClickOutSide from '../../../utils/clickOutside'
import AddToYourPost from './AddToYourPost';
import PopupBody from './PopupBody';
import PopupHeader from './PopupHeader';
import { PopupContext } from '../../../context/popupContext';
import TagsPopup from './tagsPopup';
import FeelingsPopup from './feelingsPopup';
import LocationPopup from './locationPopup';
import AddToPost from './addToPostPopup';
import GifsPopup from './gifsPopup';
import { PostViewContext } from '../../../context/postViewContext';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import {toast} from 'react-toastify'
import { usePostsContext } from '../../../context/postsContext';
import { useSelector } from 'react-redux';

const CreatePostPopup = () => {
    const { user : { token } } = useSelector(state => state.auth); 
    const { setPosts } = usePostsContext();
    const popup = useRef(null);
    const [postText , setPostText] = useState('')
    const [postImages , setPostImages] = useState([]) 
    const [postGif , setPostGif] = useState(null);
    const [background , setBackground] = useState('');
    const [media , setMedia] = useState([]); 
    const { postBg } = useContext(PostViewContext);
    const [loading , setLoading] = useState(false);

    const 
    { 
        setShowCreatePostPopup , currentPopup , setCurrentPopup
    } 
    = useContext(PopupContext)

    useClickOutSide(popup , () => {
        setShowCreatePostPopup(false);
        setCurrentPopup('createPost')
    });

    const createPost = async (postData) => {
        try {
            setLoading(true);
            const { data : { data : { post } } } = await axios.post('https:chirp.shopziaa.com/api/post', postData , {
                headers : {
                    "Content-Type" : "multipart/form-data",
                    authorization  : `Bearer ${token}`
                }
            });
            console.log(post);
            setPosts(prev => [post , ...prev]);
            setShowCreatePostPopup(false);
            setLoading(false);
            toast.success('Post Created Successfully.')
        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.message || "Something went wrong.")
            console.log(error);
        }
    }

    const handlePostSubmit = () => {
        const postType = postGif?.length > 0 ? 'gif' : media?.length > 0 ? 'media' : postBg?.length > 0 ? 'bg' : 'text';

        if(postType === 'text'){
            const formData = new FormData()
            formData.append('postType' , 'text');
            formData.append('text' , postText)
            createPost(formData);
        } else if(postType === 'bg'){
            const formData = new FormData()
            formData.append('postType' , 'bg');
            formData.append('backgroundImage' , postBg)
            formData.append('text' , postText?.length > 0 ? postText : '')
            // createPost(formData);
            
        }else if(postType === 'media'){
            console.log(postType);
            console.log(media)
            const formData = new FormData()
            formData.append('postType' , 'media');
            media.forEach(img => {
                formData.append('media' , img);
            })
            formData.append('text' , postText?.length > 0 ? postText : '');
            console.log(formData);
            createPost(formData);
        } else if(postType === 'gif'){
            const formData = new FormData()
            formData.append('postType' , 'gif');
            formData.append('gif' , postGif)
            formData.append('text' , postText?.length > 0 ? postText : '')
            // createPost(formData);
        }

    }

    return (
        <div className='bg-blur'>
            <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                <div className='popup w-full sm:w-[500px] h-auto bg-pure dark:bg-dark_primary rounded-lg p-4 ' ref={popup}>
                    {
                        currentPopup === 'createPost' 
                        ?
                            <div className='flex flex-col gap-4'>
                                <PopupHeader
                                setMedia={setMedia}
                                setPostGif={setPostGif}
                                />
                                <PopupBody 
                                postText={postText}
                                setPostText={setPostText}
                                postImages={postImages}
                                setPostImages={setPostImages}
                                postGif={postGif}
                                setPostGif={setPostGif}
                                media={media}
                                setMedia={setMedia}
                                background={background}
                                setBackground={setBackground}
                                />   
                                <AddToYourPost  postGif={postGif}/>
                                <div className="popup-submit">
                                    <button className="w-full bg-primary rounded-lg text-pure text-lg py-2 font-semibold text-center hover:bg-primaryHover disabled:cursor-not-allowed"
                                    disabled={!postText && !postBg && !postGif && media.length === 0}
                                    
                                    onClick={handlePostSubmit}>
                                        { loading ? <ClipLoader size={20} color="#fff" /> : "POST"}
                                    </button>
                                </div>
                            </div>
                        : 
                        currentPopup === 'tagPeople' 
                        ?
                            <TagsPopup />
                        : 
                        currentPopup === 'feelings'
                        ?
                            <FeelingsPopup /> 
                        :
                        currentPopup === 'location'
                        ?
                            <LocationPopup /> 
                        :
                        currentPopup === 'addToPost'
                        ?
                            <AddToPost /> 
                        :
                        currentPopup === 'gifs'
                        ?
                            <GifsPopup  
                            postImages={postImages}
                            setPostGif={setPostGif}
                            postGif={postGif}
                            setPostImages={setPostImages}
                            /> 
                        :
                        ''
                    }
                </div>
            </div>
        </div>
    )
}

export default CreatePostPopup