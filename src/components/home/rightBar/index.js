import './styles.css';
import { useState } from 'react';
import Infos from '../infos';
import Contacts from './contacts';
import SearchFriends from './SearchFriends';

const RightBar = () => {
    const [search , setSearch] = useState('')

    return (
        <div className='flex '>
            <div className='addScroll rightBar margin w-[250px] h-screen fixed top-0 right-0 overflow-auto flex flex-col gap-4 px-2 pt-4 pb-6'>
                <div>
                    <SearchFriends 
                    search={search} 
                    setSearch={setSearch} 
                    />
                </div>
                <div>
                    <Contacts />
                </div>
            </div>
            <div className='addScroll info-bar pt-4 margin h-screen fixed top-0 right-[260px] overflow-auto flex flex-col gap-4 pb-28'>
                <Infos />
            </div>
        </div>
    )
}

export default RightBar