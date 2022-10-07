import { useContext } from 'react'
import { PopupContext } from '../../context/popupContext';
import { CircleCross, LeftArrow } from '../../svgs';

const Header = () => {
    const { setShowCreatePagePopup , createPageView , setCreatePageView  } = useContext(PopupContext);

    const handleBackClick = () => {
        if(createPageView === 'iniviteFriends'){
            setCreatePageView('create')
        }else if (createPageView === 'media'){
            setCreatePageView('inviteFriends')
        }else{
            setCreatePageView('create')
        }
    }

    return (
        <div className='create-story-header w-full flex items-center justify-between py-2'>
            {
                createPageView !== 'create' &&
                <div className="small-svg bg-light dark:bg-dark_primary  rounded-full  cursor-pointer"
                onClick={handleBackClick}>
                    <LeftArrow />
                </div>
            }
            <div className='text-xl font-bold text-primary text-center w-full dark:text-light'>
                <h3>
                    { 
                        createPageView === 'create' 
                        ? 'Create Page'
                        : 
                        createPageView === 'inviteFriends'
                        ? 'Invite Friends'
                        :
                        createPageView === 'media'
                        ? 'Add Photos'
                        : ''
                    }
                </h3>
            </div>
            <div 
            className="cursor-pointer" 
            onClick={() => {
                setShowCreatePagePopup(false);
                setCreatePageView('create')
            }}
            >
                <CircleCross />
            </div>
        </div>
    )
}

export default Header;