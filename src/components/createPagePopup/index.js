import React, { useContext, useRef } from 'react'
import { PopupContext } from '../../context/popupContext';
import useClickOutside from '../../utils/clickOutside';
import CreatePageForm from './CreatePageForm';
import Header from './Header'
import InviteFriends from './InviteFriends';
import Media from './Media';

const CreatePagePopup = () => {
    const popup = useRef(null);
    const { setShowCreatePagePopup , createPageView , setCreatePageView } = useContext(PopupContext)
    

    useClickOutside(popup , () => {
        setShowCreatePagePopup(false);
        setCreatePageView('create')
    })

    return (
        <div className='bg-blur'>
            <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                <div className='popup w-full sm:w-[600px] h-auto bg-pure  dark:bg-dark_secondary rounded-lg p-4 ' 
                ref={popup}
                >
                    <Header />
                    <div className="line bg-primary w-full h-[1px] mt-2 mb-1"></div>
                    {
                        createPageView === 'create'
                        ?
                            <CreatePageForm />
                        : 
                        createPageView === 'inviteFriends'
                        ?
                            <InviteFriends />
                        : 
                        createPageView === 'media'
                        ?
                            <Media />
                        : 
                        ''
                    }
                </div>
            </div>
        </div>
    )
}

export default CreatePagePopup