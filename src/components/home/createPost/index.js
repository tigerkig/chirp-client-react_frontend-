import './styles.css';
import { Create, FaceEmojiFill, Gallery, Video } from "../../../svgs"
import { userData } from '../../../data/User';
import {  useContext } from 'react';
import { PopupContext } from '../../../context/popupContext';
import { PostViewContext } from '../../../context/postViewContext';


const CreatePost = () => {
    const { setShowCreatePostPopup , setCurrentPopup } = useContext(PopupContext);
    const { setCurrentPostView } = useContext(PostViewContext)
    //ex
    const user = userData.filter(user => user.id === 1)[0];

    const handleCreatePostClick = () => {
        setShowCreatePostPopup(true);
    }

    return (
        <div className='create-post-container my-2'>
            <div className="create-post w-full h-auto px-6 py-6 shadow-1 bg-pure dark:bg-dark_secondary sm:rounded-md flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2" 
                    onClick={handleCreatePostClick}>
                        <div className="small-svg-2">
                            <Create />
                        </div>
                        <span className="text-sm font-medium text-secondary dark:text-light cursor-pointer">
                            Create Post
                        </span>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="small-svg-2 cursor-pointer">
                            <Video />
                        </div>
                        <div className="small-svg-2 cursor-pointer"
                        onClick={() => {
                            setShowCreatePostPopup(true);
                            setCurrentPopup('createPost')
                            setCurrentPostView('media');
                        }}>
                            
                            <Gallery />
                        </div>
                        <div className="small-svg-2 cursor-pointer"
                        onClick={() => {
                            setShowCreatePostPopup(true)
                            setCurrentPopup('feelings')
                        }}>
                            <FaceEmojiFill />
                        </div>
                        
                    </div>
                </div>
                <div className="w-full border border-gray-300 rounded-md flex items-center gap-2 p-3"
                onClick={() => setShowCreatePostPopup(true)}>
                    <div className="w-[40px] h-[40px] rounded-full">
                        <img src={user?.image} alt={user?.name}  className='w-full h-full object-cover rounded-full'/>
                    </div>
                    <span className="text-secondary_light dark:text-light text-sm">What's going on?</span>
                </div>
              
            </div>
            
        </div>
    )
}

export default CreatePost