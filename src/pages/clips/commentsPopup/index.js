import './styles.css';
import useClickOutside from '../../../utils/clickOutside';
import Header from './Header';
import { useRef } from 'react';
import AddComment from './AddComment';


const CommentsPopup = ({ setShowCommentsPopup }) => {
    const popup = useRef(null);
    useClickOutside(popup , () => setShowCommentsPopup(false))
    
    return (
        <div className='bg-blur'>
            <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                <div className='popup w-full sm:w-[500px] h-auto bg-pure dark:bg-dark_secondary rounded-lg p-4 ' 
                ref={popup}
                >
                    <div className='flex flex-col gap-6'>
                        <Header setShowCommentsPopup={setShowCommentsPopup}/>
                        <AddComment />    
                    </div>               

                </div>
            </div>
        </div>
    )
}

export default CommentsPopup;