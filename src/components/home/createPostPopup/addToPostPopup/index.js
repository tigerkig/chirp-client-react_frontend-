import { useContext } from 'react';
import { PopupContext } from '../../../../context/popupContext';
import { FaceEmojiFill, Gallery, Gif, Location, TagFriend, VideoFill } from '../../../../svgs';
import PopupHeader from '../PopupHeader';
import './styles.css';

const AddToPost = () => {
    const { setCurrentPopup } = useContext(PopupContext)

    const handleClick = (popup) => {
        setCurrentPopup(popup)
    }

    return (
        <div  className="flex flex-col gap-3">
            <PopupHeader headerText="Add to your post" />
            <div className='grid grid-cols-2 gap-1 text-sm sm:text-base' >
                <div className='flex items-center gap-3 bg-transparent rounded-md px-2 py-3 hover:bg-light dark:hover:bg-dark_secondary cursor-pointer'>
                    <div className="small-svg">
                        <Gallery />
                    </div>
                    <p className='dark:text-gray-200'>Photo/video</p>
                </div>
                <div className='flex items-center gap-3 bg-transparent rounded-md px-2 py-3 hover:bg-light dark:hover:bg-dark_secondary cursor-pointer'
                onClick={() => handleClick('tagPeople')}
                >
                    <div className="small-svg">
                        <TagFriend />
                    </div>
                    <p className='dark:text-gray-200'>Tag people</p>
                </div>
                <div className='flex items-center gap-3 bg-transparent rounded-md px-2 py-3 hover:bg-light dark:hover:bg-dark_secondary cursor-pointer'
                onClick={() => handleClick('feelings')}
                >
                    <div className="small-svg">
                        <FaceEmojiFill />
                    </div>
                    <p className='dark:text-gray-200'>Feeling/Activity</p>
                </div> 
                <div className='flex items-center gap-3 bg-transparent rounded-md px-2 py-3 hover:bg-light dark:hover:bg-dark_secondary cursor-pointer'
                onClick={() => handleClick('location')}
                >
                    <div className="small-svg">
                        <Location />
                    </div>
                    <p className='dark:text-gray-200'>Check in</p>
                </div> 
                <div className='flex items-center gap-3 bg-transparent rounded-md px-2 py-3 hover:bg-light dark:hover:bg-dark_secondary cursor-pointer filter-svg'>
                    <button onClick={() => handleClick('gifs')}>
                        <Gif />
                    </button>
                    <p className='dark:text-gray-200'>GIF</p>
                </div> 
                <div className='flex items-center gap-3 bg-transparent rounded-md px-2 py-3 hover:bg-light dark:hover:bg-dark_secondary cursor-pointer'>
                    <div className="small-svg">
                        <VideoFill />
                    </div>
                    <p className='dark:text-gray-200'>Live video</p>
                </div>
            </div>
        </div>
    )
}

export default AddToPost