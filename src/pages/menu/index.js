import './styles.css';
import Leftbar from '../../components/home/leftBar';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import SubMenus from './SubMenus';

const Menu = () => {
   
    
    return (
        <div>
            <Navbar />
            <div className='common-wrapper min-h-screen  margin flex gap-6 bg-light dark:bg-dark_primary pb-16'>
                <div className='common-left'>
                    <Leftbar />
                </div>
                <div className='common-container w-full py-4'>
                    <div className='common flex flex-col gap-4'>
                        <h3 className='text-primary dark:text-rose-600 font-semibold text-lg'>Menu</h3>
                        <Link to='/profile'>
                            <div className='flex items-center gap-4 w-full sm:w-1/2 py-2 px-2 rounded-lg hover:bg-active dark:hover:bg-dark_secondary'>
                                <div className="circle-img">
                                    <img src='/users/user-1.jpg' alt='Umair' />
                                </div>
                                <div>
                                    <p className='text-dark text-base font-semibold dark:text-light'>
                                        Umair Ahmad
                                    </p>
                                    <p className='text-xs text-secondary_light  '>
                                        See your profile
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <div>
                            <h4 className='text-base text-primary font-semibold dark:text-rose-600'>
                                My Pages
                            </h4>
                            <div className='flex sm:items-center justify-between sm:flex-row flex-col gap-4 py-4'>
                                <div className='flex items-center gap-4 rounded-lg py-2 px-2 hover:bg-active dark:hover:bg-dark_secondary sm:flex-1 cursor-pointer'>
                                    <div className="circle-img">
                                        <img src="/tours/tour-6-2.jpg" alt="Page" />
                                    </div>
                                    <p className='text-dark font-medium dark:text-light'>Ghair Mulki</p>
                                </div>
                                <div className='flex items-center gap-4 rounded-lg py-2 px-2 hover:bg-active dark:hover:bg-dark_secondary sm:flex-1 cursor-pointer'>
                                    <div className="circle-img">
                                        <img src="/tours/tour-5-1.jpg" alt="Page" />
                                    </div>
                                    <p className='text-dark font-medium dark:text-light'>Ghair Mulki</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <SubMenus />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;