import './styles.css';
import { useState } from 'react';
import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';
import SearchHeader from '../../components/searchHeader';
import FriendsTab from '../../components/profile/friends';

const Friends = () => {
    const [search , setSearch] = useState('');


    return (
        <div>
            <Navbar />
            <div className='common-wrapper min-h-screen  margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='common-left'>
                    <Leftbar />
                </div>
                <div className='common-container w-full py-4'>
                    <div className='common flex flex-col gap-4'>
                        <SearchHeader 
                        heading='Friends'
                        placeholder='Search for friends'
                        search={search} 
                        setSearch={setSearch} 
                        />

                        <FriendsTab />
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Friends