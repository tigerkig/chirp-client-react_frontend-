import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu , Messenger , Notification } from '../../../svgs';
import ProfileMenus from '../../profileMenus';
import useClickOutside from '../../../utils/clickOutside'
import MainMenu from '../../mainMenu';
import { useAuthContext } from '../../../context/authContext';


const RightMenu = () => {
    const { auth , setAuth } = useAuthContext();
    const profileMenuRef = useRef(null);
    const mainMenuRef = useRef(null);
    const [showProfileMenu , setShowProfileMenu ] = useState(false);
    const [showMainMenu , setShowMainMenu] = useState(false);

    useClickOutside(profileMenuRef , () => setShowProfileMenu(false))
    useClickOutside(mainMenuRef , () => setShowMainMenu(false))

    return (
        <div className='flex items-center gap-6'>
            <div className="relative right-menu w-fit" ref={mainMenuRef}>

                <div
                className={`w-[40px] h-[40px] bg-light hover:bg-active rounded-full flex items-center justify-center cursor-pointer  relative all-menu-btn
                ${showMainMenu ? 'bg-active' : '' } `
                }
                onClick={() => setShowMainMenu(!showMainMenu)}           
                >
                    <Menu /> 
                
                </div>
                {
                    showMainMenu && 
                    <div className='absolute top-[150%] right-0'>
                        <MainMenu setShowMainMenu={setShowMainMenu} />
                    </div>
                }
            </div>
            <NavLink to='/notification'
            style={({isActive}) => { 
                return {
                    background : isActive ? '#E4C9C9' : ''
                }
            }}
            >
               <Notification /> 
            </NavLink>
            <NavLink to='/demo'
            style={({isActive}) => { 
                return {
                    background : isActive ? '#E4C9C9' : ''
                }
            }}
            >
               <Messenger /> 
            </NavLink>
            <div className='relative profile-avatar cursor-pointer' ref={profileMenuRef}>
                <img 
                src={auth?.user?.profileImage || "/users/user-1.jpg" }
                alt="" 
                className='w-[40px] h-[40px] rounded-full'
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                />
                {
                    showProfileMenu &&
                    <div className='absolute top-[150%] right-0 '>
                        <ProfileMenus />
                    </div>
                }
            </div>
        </div>
    )
}

export default RightMenu;