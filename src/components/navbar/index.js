import './styles.css';
import LargeScreenNav from './largeScreenNav'
import SmallScreenNav from './SmallScreenNav.js'

const Navbar = () => {
   
    return (
        <nav className='nav w-full bg-white dark:bg-primary fixed top-0 left-0 z-50'>
            <div className='large-screen-nav-container'>
                <LargeScreenNav />
            </div>
            <div className='small-screen-nav-container'>
                <SmallScreenNav />
            </div>
        </nav>
    )
}

export default Navbar