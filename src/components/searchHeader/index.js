import './styles.css';
import { Search } from '../../svgs';

const SearchHeader = ({ heading , search = '' , setSearch = '' , placeholder = '' , showSearch = true }) => {
    return (
        <div className='search-header shadow-2 bg-pure dark:bg-dark_secondary rounded-lg flex items-center justify-between p-4 sm:flex-row flex-col gap-4 filter-svg'>
        <h3 className='font-semibold text-lg text-dark dark:text-light'>{heading}</h3>
        {
            showSearch && 
                <div className="border border-gray-200 dark:border-gray-400 dark:bg-dark_secondary bg-light rounded-full py-2 px-3 text-base flex items-center w-full sm:w-[40%] gap-3 ">
                <Search />
                <input 
                className="bg-transparent border-none outline-none w-full sm:w-[85%] text-sm sm:text-base dark:text-light"
                type="text" 
                placeholder={placeholder} 
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                />
             </div> 
        }
    </div>
    )
}

export default SearchHeader