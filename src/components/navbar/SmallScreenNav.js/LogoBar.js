import { Logo, MenuBtn, Messenger, Search } from '../../../svgs';
import { Link, NavLink } from 'react-router-dom';
import { useSearchContext } from '../../../context/searchContext';


const LogoBar = () => {
    const { setShowSearch } = useSearchContext();

    return (
        <div className='logo-bar w-full flex items-center justify-between py-3'>
            <Link to='/' className='logo'>
                <div>
                    <Logo />   
                </div>
            </Link>
            <div className='flex items-center gap-4'>
                <div className='small-circle-svg'
                onClick={() => setShowSearch(true) }>
                    <Search />
                </div>
                <div className='small-circle-svg'>
                    <Messenger />
                </div>
                <div className='small-circle-svg menu-btn'>
                    <NavLink to='/menu' className='w-full h-full rounded-full flex items-center justify-center'
                        style={({isActive}) => { 
                            return {
                                background : isActive ? '#E4C9C9' : ''
                            }
                        }}
                        >
                        <MenuBtn />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default LogoBar