// import './styles.css';
import { useState } from 'react';
import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';
import SearchHeader from '../../components/searchHeader';
import { contactsData } from '../../components/home/rightBar/contacts/ContactsData';
import OnlineItem from './OnlineItem';

const Online = () => {
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
                        heading='Online'
                        placeholder='Search for friends'
                        search={search} 
                        setSearch={setSearch} 
                        />

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                            {
                                contactsData?.map(friend => (
                                    <OnlineItem friend={friend} />
                                ))
                            }
                            {
                                contactsData?.map(friend => (
                                    <OnlineItem friend={friend} />
                                ))
                            }
                        </div>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Online;