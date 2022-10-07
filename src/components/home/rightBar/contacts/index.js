import React, { useContext } from 'react'
import { CreateRoomContext } from '../../../../context/createRoomContext'
import { VideoFill } from '../../../../svgs'
import ContactItem from './ContactItem'
import { contactsData } from './ContactsData'

const Contacts = () => {
    const { setShowRoomPopup } = useContext(CreateRoomContext)

    return (
        <div className='w-full flex flex-col gap-4 px-2 pb-20'>
            <div className='w-full flex items-center justify-between'>
                <span className='dark:text-light'>Contacts</span>
                <div 
                className="small-svg cursor-pointer" 
                onClick={() => setShowRoomPopup(true)}
                >
                    <VideoFill />
                </div>
            </div>
            <div>
                {
                    contactsData.map(( contact , i ) => (
                        <ContactItem contact={contact} key={i} />
                    ))
                }
            </div>
            <div>
                {
                    contactsData.map(( contact , i ) => (
                        <ContactItem contact={contact} key={i} />
                    ))
                }
            </div>
            <div>
                {
                    contactsData.map(( contact , i ) => (
                        <ContactItem contact={contact} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default Contacts