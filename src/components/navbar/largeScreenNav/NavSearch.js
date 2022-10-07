import { useState } from 'react';
import { useSearchContext } from '../../../context/searchContext';
import { LeftArrow, Search } from '../../../svgs';

const NavSearch = () => {
    const [search , setSearch] = useState('');
    const { setShowSearch } = useSearchContext();

    return (
        <div className='nav-search flex items-center gap-3 bg-light dark:bg-gray-100 rounded-full py-2 px-3 text-secondary border border-gray-100 relative'
        onClick={() => setShowSearch(true)}>
            <Search />
            <input 
            type="text" 
            value={search} 
            onChange={e => setSearch(e.target.value)}
            placeholder='Search...'
            className='bg-transparent border-none outline-none'
            />

        </div>
    )
}

export default NavSearch