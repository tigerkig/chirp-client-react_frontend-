import { useState } from 'react';
import Navbar from '../../components/navbar';
import Blocking from '../../components/settings/blocking';
import ChirpInformation from '../../components/settings/chirpInformation';
import General from '../../components/settings/general';
import Location from '../../components/settings/location';
import Privacy from '../../components/settings/privacy';
import ProfileAndTagging from '../../components/settings/profileAndTagging';
import ReactionPreferences from '../../components/settings/reactionPreferences';
import Reports from '../../components/settings/reports';
import SecurityAndLogin from '../../components/settings/securityAndLogin';
import Sidebar from '../../components/settings/sidebar';
import Stories from '../../components/settings/stories';
import './styles.css';

const Settings = () => {
    const [currentSetting , setCurrentSetting] = useState('General');


    return (
        <div>
            <Navbar />
            <div className='flex gap-4 margin w-full min-h-screen bg-light dark:bg-dark_primary py-4 pl-4 pr-4 md:pr-8'>
                <div className="settings-sidebar margin addScroll overflow-auto fixed top-0 left-0 w-[300px] h-screen z-20 bg-pure dark:bg-dark_secondary shadow-2 pb-20">
                    <Sidebar 
                    currentSetting={currentSetting}
                    setCurrentSetting={setCurrentSetting}
                    />
                </div>
                <div className='settings-content w-full h-fit bg-white dark:bg-dark_secondary shadow-2 rounded-lg  sm:px-4 pt-4 pb-8 ml-[320px] '>
                    {
                        currentSetting === 'General'
                        ? 
                            <General />
                        :
                        currentSetting === 'Security and login'
                        ?
                            <SecurityAndLogin />
                        : 
                        currentSetting === 'Your Chirp information'
                        ? 
                            <ChirpInformation />
                        :
                        currentSetting === 'Privacy'
                        ? 
                            <Privacy />
                        :
                        currentSetting === 'Profile and tagging'
                        ? 
                            <ProfileAndTagging />
                        :
                        currentSetting === 'Blocking'
                        ? 
                            <Blocking />
                        :
                        currentSetting === 'Location'
                        ? 
                            <Location />
                        :
                        currentSetting === 'Stories'
                        ? 
                            <Stories />
                        :
                        currentSetting === 'Reaction preferences'
                        ? 
                            <ReactionPreferences />
                        :
                        currentSetting === 'Support Inbox'
                        ? 
                            <Reports />
                        :
                            ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Settings;