import './styles.css';
import SocialMenu from './SocialMenu'
import CreateMenu from './CreateMenu';

const MainMenu = ({ setShowMainMenu }) => {
    return (
        <div>
            <div className='bg-pure dark:bg-[#323436] shadow-2 rounded-lg flex gap-4 w-[500px] h-[550px]  p-4'>
                <div className='w-[70%]'>
                    <SocialMenu />
                </div>
                <div className='w-[30%]'>
                    <CreateMenu setShowMainMenu={setShowMainMenu} />
                </div>
            </div>
        </div>
    )
}

export default MainMenu