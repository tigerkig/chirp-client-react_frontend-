import { Search } from '../../../svgs';


const SearchFriends = ({ search , setSearch }) => {
    return (
        <form>
            <div className='border border-gray-200 dark:border-gray-500 rounded-full pl-3 pr-1 py-1 flex items-center justify-between gap-2 overflow-hidden'>
                <div className="small-svg ">
                    <Search />
                </div>
                <div>
                    <input 
                    className='bg-transparent border-none outline-none dark:text-secondary_light'
                    type="text" 
                    value={search}
                    onChange={ e => setSearch(e.target.value)}
                    placeholder='Search Friends'
                    />
                </div>
            </div>
        </form>
    )
}

export default SearchFriends