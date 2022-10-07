import './styles.css';
import LogoBar from './LogoBar';
import MenuBar from './MenuBar';

const SmallScreenNav = () => {
    return (
        <div className='small-screen-nav px-2 md:px-12 border-b border-b-gray-300'>
            <div className='logo-bar-container'>
                <LogoBar />
            </div>
            
            <div className="menu-bar-container ">
                <MenuBar />
            </div>
        </div>
    )
}

export default SmallScreenNav