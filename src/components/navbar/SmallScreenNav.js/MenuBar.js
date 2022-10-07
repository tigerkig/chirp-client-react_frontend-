import React from 'react'
import { Link , useLocation } from 'react-router-dom'
import { Groups, Home, MenuBtn, Notification, Pages, Watch } from '../../../svgs'

const MenuBar = () => {
    const location = useLocation();

    return (
        <div className='menu-bar w-full flex items-center justify-center px-2 '>
           <div className='flex items-center md:gap-20 gap-16 '>
               <Link to='/'>
                    <div 
                    className={`menu-bar-item flex flex-col  items-center justify-center text-center 
                    ${location.pathname === '/' ? 'active' : ''}`
                    }>
                        <div className='small-svg' >
                            <Home />
                        </div>
                        {/* <span className='text-center text-primary '>Home</span> */}
                    </div>
                </Link>
                <Link to='/watch'>
                    <div 
                    className={` menu-bar-item flex flex-col gap-2 items-center justify-center text-center
                    ${location.pathname === '/watch' ? 'active' : ''}`
                    }>  
                        <div className='small-svg' >
                            <Watch />
                        </div>
                        {/* <span className='text-center text-primary'>Watch</span> */}
                    </div>
                </Link>
                <Link to='/groups'>
                    <div 
                    className={` menu-bar-item flex flex-col gap-2 items-center justify-center text-center
                    ${location.pathname === '/groups' ? 'active' : ''}`
                    }>  
                        <div className='small-svg'>
                            <Groups />
                        </div>
                        {/* <span className='text-center text-primary'>Groups</span> */}
                    </div>
                </Link>
                <Link to='/pages'>
                    <div 
                    className={`menu-bar-item flex flex-col gap-2 items-center justify-center text-center
                    ${location.pathname === '/pages' ? 'active' : ''}`
                    }>  
                        <div className='small-svg' >
                            <Pages />
                        </div>
                        {/* <span className='text-center text-primary'>Pages</span> */}
                    </div>
                </Link>
               
                {/* <Link to='/notifications'>
                    <div 
                    className={`menu-bar-item flex flex-col gap-2 items-center justify-center text-center
                    ${location.pathname === '/notifications' ? 'active' : ''}`
                    }>  
                        <div className='small-svg' >
                            <Notification />
                        </div>
                        
                    </div>
                </Link> */}

                <Link to='/menu'>
                    <div 
                    className={`menu-bar-item menu-btn flex flex-col gap-2 items-center justify-center text-center 
                    ${location.pathname === '/menu' ? 'active' : ''}`
                    }>  
                        <div className='small-svg -translate-x-1' >
                            <MenuBtn />
                        </div>
                        {/* <span className='text-center text-primary'>Menu</span> */}
                    </div>
                </Link>
           </div>
        </div>
    )
}

export default MenuBar