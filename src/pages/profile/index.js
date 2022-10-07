import './styles.css';
import Navbar from '../../components/navbar'
import Leftbar from './../../components/home/leftBar'
import ProfileHeader from '../../components/profile/header';
import ProfilePosts from '../../components/profile/posts';
import { useState } from 'react';
import AboutProfile from '../../components/profile/about';
import FriendsTab from '../../components/profile/friends';
import Photos from '../../components/profile/photos';
import Videos from '../../components/profile/videos';
import Events from '../../components/profile/events';

import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Profile = () => {
    const navigate = useNavigate();
    const [currentTab , setCurrentTab ] = useState('Posts');
    const { user : { user } } = useSelector(state => state.auth);

    useEffect(() => {
        if(!user){
            toast.error('Please login to your account.')
            return navigate('/login')
        }
    }, []);
   
    
    return (
        <div>
            <Navbar />
            <div className='profile-wrapper min-h-screen  margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='profile-left'>
                    <Leftbar />
                </div>
                <div className='profile-container w-full py-4'>
                    <div className='profile flex flex-col  gap-4'>
                        <ProfileHeader 
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                        />
                        <div className="profile-content">
                            {
                                currentTab === 'Posts' 
                                ?
                                    <ProfilePosts />
                                : 
                                currentTab === 'About'
                                ? 
                                    <AboutProfile />
                                : 
                                currentTab === 'Friends'
                                ? 
                                    <FriendsTab />
                                : 
                                currentTab === 'Photos'
                                ?   
                                    <Photos />
                                : 
                                currentTab === 'Videos'
                                ?   
                                    <Videos />
                                : 
                                currentTab === 'Events'
                                ?   
                                    <Events />
                                : ''
                            }
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Profile