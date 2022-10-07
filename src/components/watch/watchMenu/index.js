import React, { useState } from 'react'
import { Online, Saved, Search, Video, Watch } from '../../../svgs';


const tabs = [
    {
        title : 'Home' ,
        Svg : Watch   
    },
    {
        title : 'Live' ,
        Svg : Video   
    },
    {
        title : 'Show' ,
        Svg : Online   
    },
    {
        title : 'Saved' ,
        Svg : Saved   
    },
]
const WatchMenu = ({ currentTab , setCurrentTab }) => {
    const [search , setSearch] = useState('')

    const handleTabClick = tab => {
        setCurrentTab(tab);
    }

    return (
        <div className=' margin py-2 px-3 flex flex-col gap-4 filter-svg'>
            <div className='text-dark dark:text-light font-bold text-2xl '>
                <h1>Watch</h1>
            </div>
            <div className="border border-gray-200 dark:border-gray-400 bg-light dark:bg-dark_primary rounded-full py-2 px-3 text-base flex items-center w-full gap-3">
                <Search />
                <input 
                className="bg-transparent border-none outline-none w-full sm:w-[85%] text-sm sm:text-base dark:text-gray-200"
                type="text" 
                placeholder='Search videos' 
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                />
            </div> 
            <div className='flex flex-col gap-2 '>
                {
                    tabs?.map(({Svg , title} , i) => (
                        <div key={i} className={`flex items-center gap-3  hover:bg-active dark:hover:bg-dark_primary rounded-lg py-3 px-2 cursor-pointer
                        ${currentTab === title ? 'bg-active dark:bg-dark_primary' : ''}
                        `}
                        onClick={() => handleTabClick(title)}
                        >
                            <div className="small-svg">
                                <Svg />
                            </div>
                            <p className='text-secondary font-semibold dark:text-gray-200'>{title}</p>
                        </div>  
                    ))
                }
               
            </div>
        </div>
    )
}

export default WatchMenu