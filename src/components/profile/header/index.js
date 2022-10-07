import Cover from './Cover';
import ProfilePicture from './ProfilePicture';
import './styles.css';
import Tabs from './Tabs';

const coverImage = 'https://i.pinimg.com/originals/20/ab/34/20ab3479a8b0eb6b36728652ef1443c0.jpg';

const ProfileHeader = ({ currentTab , setCurrentTab}) => {
    return (
        <div>
            <div className='profile-header bg-pure dark:bg-dark_secondary sm:rounded-lg  sm:p-4 flex flex-col gap-4 shadow-2'>
                <Cover coverImage={coverImage}/>
                <ProfilePicture />
                <Tabs 
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                />
            </div>
        </div>
    )
}

export default ProfileHeader