import './styles.css';
import { Logo } from '../../../svgs'
import MiddleMenu from './MiddleMenu';
import RightMenu from './RightMenu';
import { Link } from 'react-router-dom';

const LargeScreenNav = () => {

    return (
        <div className='w-full h-auto py-4 px-4 border-b border-b-gray-200 dark:border-b-gray-700'>
            <div className='large-screen-nav w-full flex items-center justify-between'>
                <div className='flex items-center justify-start flex-1'>
                    <Link to='/' className='logo '>
                        <Logo />   
                    </Link> 
                </div>     
                <div className='nav-middle flex-2'>
                    <MiddleMenu />           
                </div>  
                <div className='nav-right flex-1 flex justify-end'>
                    <RightMenu />
                </div>  
            </div>
        </div>
    )
}

export default LargeScreenNav;