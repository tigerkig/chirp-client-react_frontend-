import { NavLink } from 'react-router-dom';
import NavSearch from './NavSearch';
import { Home , C , Watch , Video, Groups, Pages } from '../../../svgs';


const MiddleMenu = () => {
    

    return (
        <div className='flex items-center gap-6'>
            <NavSearch />
            <NavLink to='/'
            style={({isActive}) => { 
                return {
                    background : isActive ? '#E4C9C9' : ''
                }
            }}
            >
               <Home /> 
            </NavLink>

            <NavLink to='/watch'
            style={({isActive}) => { 
                return {
                    background : isActive ? '#E4C9C9' : ''
                }
            }}
            >
                <Watch />
            </NavLink>

            <NavLink to='/pages'
            style={({isActive}) => { 
                return {
                    background : isActive ? '#E4C9C9' : ''
                }
            }}
            >
                <Pages />
            </NavLink>

            <NavLink to='/groups'
            style={({isActive}) => { 
                return {
                    background : isActive ? '#E4C9C9' : ''
                }
            }}
            >
                <Groups />
            </NavLink>

            <NavLink to='/clips'
            style={({isActive}) => { 
                return {
                    background : isActive ? '#E4C9C9' : ''
                }
            }}
            >
                <C />
            </NavLink>
        </div>
    )
}

export default MiddleMenu