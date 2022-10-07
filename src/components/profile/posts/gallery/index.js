import './styles.css';
import { Link } from 'react-router-dom';
import { imagesData } from '../../../../data/Images';

const ProfileGallery = () => {
    return (
        <div className='profile-gallery-container bg-pure dark:bg-dark_secondary rounded-lg shadow-2 sm:p-4 p-2 flex flex-col gap-4'>
            <div className='flex items-center justify-between text-sm text-secondary dark:text-light'>
                <span>Photos</span>
                <Link to='/profile/all-images' className='dark:text-rose-600'>
                    see all
                </Link>
            </div>
            <div className='profile-gallery-grid grid grid-cols-2 gap-2'>
                {
                    imagesData?.slice(0,6).map((image ,i) => (
                        <img 
                        src={image} 
                        key={i} 
                        alt='Profile gallery item' 
                        className='rounded-lg'/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProfileGallery