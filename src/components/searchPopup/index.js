import React, { useRef } from 'react'
import { useSearchContext } from '../../context/searchContext';
import { CircleCross, Cross, LeftArrow, Search } from '../../svgs';
import useClickOutside from '../../utils/clickOutside';

const SearchPopup = () => {
    const popup = useRef(null);
    const { setShowSearch , search , setSearch } = useSearchContext();

    useClickOutside(popup , () => setShowSearch(false))
    
    return (
        <div className='bg-blur'>
            <div className="popup-container w-full min-h-screen flex items-center justify-center px-2">
                <div className='popup w-full sm:w-[500px] h-auto bg-pure dark:bg-dark_secondary rounded-lg py-4 px-2 sm:p-4 ' 
                ref={popup}
                >
                    <div className='flex items-center justify-between gap-2 sm:gap-4'>
                        <div className='bg-light dark:bg-dark_primary rounded-full p-2 cursor-pointer'
                        onClick={() => setShowSearch(false)}>
                            <div className="small-svg-2">
                                <LeftArrow />
                            </div>
                        </div>
                        <div className='flex items-center gap-3 bg-light rounded-full py-1.5 px-3 text-secondary border border-gray-100 relative w-full dark:border-gray-500 dark:bg-dark_primary dark:text-light filter-svg'
                        onClick={() => setShowSearch(true)}>
                            <Search />
                            <input 
                            type="text" 
                            value={search} 
                            onChange={e => setSearch(e.target.value)}
                            placeholder='Search...'
                            className='bg-transparent border-none outline-none w-full'
                            />

                        </div>
                    </div>
                    <div className='text-sm flex items-center justify-between mt-6'>
                        <p className='text-dark font-semibold capitalize dark:text-light'>
                            Recent Searches
                        </p>
                        <p className='text-rose-700 font-semibold cursor-pointer'>
                            Edit
                        </p>
                    </div>
                    <div className='mt-4 flex flex-col gap-1 addScroll h-[250px] overflow-auto'>
                        <div className='flex items-center justify-between rounded-md hover:bg-active dark:hover:bg-dark_primary py-2 px-2 cursor-pointer'>
                            <div className='flex items-center gap-4'>
                                <div className="circle-img">
                                    <img src='/users/user-1.jpg' alt='User' />
                                </div>
                                <p className='dark:text-light'>Umair Ahmad</p>
                            </div>
                            <div className="small-svg-2 cursor-pointer">
                                <CircleCross />
                            </div>
                        </div>
                        <div className='flex items-center justify-between rounded-md hover:bg-active dark:hover:bg-dark_primary py-2 px-2 cursor-pointer'>
                            <div className='flex items-center gap-4'>
                                <div className="circle-img">
                                    <img src='/users/user-5.jpg' alt='User' />
                                </div>
                                <p className='dark:text-light'>John Doe</p>
                            </div>
                            <div className="small-svg-2 cursor-pointer">
                                <CircleCross />
                            </div>
                        </div>
                        <div className='flex items-center justify-between rounded-md hover:bg-active dark:hover:bg-dark_primary py-2 px-2 cursor-pointer'>
                            <div className='flex items-center gap-4'>
                                <div className="circle-img">
                                    <img src='/users/user-10.jpg' alt='User' />
                                </div>
                                <p className='dark:text-light'>Kane Williamson</p>
                            </div>
                            <div className="small-svg-2 cursor-pointer">
                                <CircleCross />
                            </div>
                        </div>
                        <div className='flex items-center justify-between rounded-md hover:bg-active dark:hover:bg-dark_primary py-2 px-2 cursor-pointer'>
                            <div className='flex items-center gap-4'>
                                <div className="circle-img">
                                    <img src='/users/user-8.jpg' alt='User' />
                                </div>
                                <p className='dark:text-light'>Jessica Roy</p>
                            </div>
                            <div className="small-svg-2 cursor-pointer">
                                <CircleCross />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPopup