import React, { useState } from 'react'
import { Events, Search , Friends , Groups , NewsFeed ,Favourites , Pages , Memories , Saved } from '../../svgs';
import SocialMenuItem from './SocialMenuItem';

const SocialMenu = () => {
    const [search , setSearch] = useState('');

    return (
        <div className='bg-pure dark:bg-dark_secondary shadow-2 rounded-lg flex flex-col gap-4 py-2 px-3 w-full h-full addScroll overflow-auto'>
            <div className="border border-gray-200 bg-light dark:bg-dark_primary dark:border-gray-400 rounded-full py-2 px-3 text-base flex items-center w-full gap-3 filter-svg">
                <Search />
                <input 
                className="bg-transparent border-none outline-none w-full sm:w-[85%] text-sm sm:text-base dark:text-gray-200"
                type="text" 
                placeholder='Search menu' 
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                />
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-dark font-semibold dark:text-light'>Social</h3>

                <SocialMenuItem 
                url='#' 
                heading="Event" 
                Svg={Events} 
                desc=' Organize or find events and other things to do online and nearby'
                />
                <SocialMenuItem 
                url='#' 
                heading="Find Friends" 
                Svg={Friends} 
                desc=' Organize or find events and other things to do online and nearby'
                />
                <SocialMenuItem 
                url='#' 
                heading="Groups" 
                Svg={Groups} 
                desc=' Organize or find events and other things to do online and nearby'
                />
                <SocialMenuItem 
                url='#' 
                heading="News Feed" 
                Svg={NewsFeed} 
                desc=' Organize or find events and other things to do online and nearby'
                />
                <SocialMenuItem 
                url='#' 
                heading="Favourites" 
                Svg={Favourites} 
                desc='View posts by Favorites'
                />
                <SocialMenuItem 
                url='#' 
                heading="Most Recent" 
                Svg={Favourites} 
                desc=' Organize or find events and other things to do online and nearby'
                />
                <SocialMenuItem 
                url='#' 
                heading="Pages" 
                Svg={Pages} 
                desc='View your pages'
                />
                
               

                

                
            </div>
            <hr />
            <div className="personal flex flex-col gap-3">
                <h3 className='text-dark font-semibold dark:text-gray-200'>Personal</h3>
                <SocialMenuItem 
                url='#' 
                heading="Memories" 
                Svg={Memories} 
                desc='Organize or find events and other things to do online and nearby'
                />
                 <SocialMenuItem 
                url='#' 
                heading="Saved" 
                Svg={Saved} 
                desc='Saved Items'
                />
            </div>

        </div>
    )
}

export default SocialMenu