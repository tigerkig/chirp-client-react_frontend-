import React from 'react'

const SettingItem = ({ setting : { title , Svg } , currentSetting , setCurrentSetting }) => {


    return (
        <div 
        className={`lg:py-3 lg:px-2 py-2 px-2 hover:bg-active dark:hover:bg-dark_primary rounded-full lg:rounded-lg cursor-pointer lg:w-full w-fit
        ${currentSetting === title ? 'bg-active dark:bg-dark_primary' : ''}`}
        onClick={() => setCurrentSetting(title)}
        >
            <div className='flex items-center  gap-4'>
                <div className='bg-primary md:w-[40px] w-[30px] h-[30px] md:h-[40px] rounded-full  flex items-center justify-center'>
                    <div className="small-svg-2 setting-sidebar-svg pure-svg">
                        <Svg />
                    </div>  
                </div>
                <h3 className='text-secondary_light dark:text-gray-200 text-sm lg:block hidden'>
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default SettingItem