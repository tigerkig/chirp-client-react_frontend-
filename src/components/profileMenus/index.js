import './styles.css';
import { useState } from 'react';
import HelpSupprtMenu from './HelpSupprtMenu';
import MainMenu from './MainMenu';
import ThemeSelect from './ThemeSelect';


const ProfileMenus = () => {
    const [currentMenu , setCurrentMenu ] = useState('main');

    return (
        <div>
            <div className='bg-pure dark:bg-dark_secondary rounded-lg flex flex-col gap-1 p-2 w-[300px] shadow-2'>
                {
                    currentMenu && currentMenu === 'main'
                    ?
                        <MainMenu 
                        setCurrentMenu={setCurrentMenu}
                        />
                    : 
                    currentMenu === 'help'
                    ? 
                        <HelpSupprtMenu setCurrentMenu={setCurrentMenu}/>
                    :
                    currentMenu === 'theme'
                    ? 
                        <ThemeSelect setCurrentMenu={setCurrentMenu}/>
                    : ''
                }
            </div>
        </div>
    )
}

export default ProfileMenus