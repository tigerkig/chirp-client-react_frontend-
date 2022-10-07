import './styles.css';
import Menus from './menus';
import YourPages from './yourPages';
import YourGroups from './yourGroups';
import { useSelector } from 'react-redux';

const LeftBar = () => {
    const { user : { user } } = useSelector(state => state.auth);

    return (
        <div className='leftBar-container'>
            <div className='addScroll leftBar margin fixed top-0 left-0 w-[280px] h-screen px-4 py-3 pb-32 flex flex-col gap-4 overflow-auto'>
                <div className="leftBar-header w-full flex items-center gap-4">
                    <div className='circle-img'>
                        <img src={user?.profileImage || '/users/user-1.jpg'} alt='User' />
                    </div>
                    <span className='text-base text-dark font-semibold dark:text-light'>{user?.firstName + " " + user?.lastName || "Umair Ahmad"} </span>
                </div>
                <div className="leftBar-menus ">
                    <Menus />
                </div>
                <hr  className='text-dark bg-dark'/>
                <div className="your-pages">
                    <YourPages />
                </div>
                <hr />
                {/* <div className='w-full bg-white dark:bg-gray-500  p-[.5px]'></div> */}
                <div className='your-groups'>
                    <YourGroups />
                </div>
            </div>
        </div>
    )
}

export default LeftBar