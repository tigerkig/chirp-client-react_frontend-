import React from 'react'
import { useThemeContext } from '../../context/themeContext'

const ThemeSelect = ( { setCurrentMenu }) => {
    const { setTheme , theme } = useThemeContext();

    const handleLightChange = (e) => {
        if(e.target.checked){
            setTheme('light')
        }
    }

    const handleDarkChange = (e) => {
        if(e.target.checked){
            setTheme('dark')
        }
    }

    return (
        <>
            <div className='text-center pt-1 pb-2 relative'>
            <div 
            className='absolute left-[12px] -top-[1px]  text-primary cursor-pointer w-[35px] h-[35px] bg-light rounded-full flex items-center justify-center '
            onClick={() => setCurrentMenu('main')}
            >
                <img 
                src='/leftArrow.png' 
                alt='Back' 
                className='w-full max-w-[25px] h-[25px]'
                />
            </div>
            <h3 className='text-lg font-semibold dark:text-light'>Display Mode</h3>
            </div>
            <div className='w-full rounded-lg p-2 flex items-center justify-between gap-2 hover:bg-active dark:hover:bg-dark_primary cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <div className="primary-circle-svg">
                        <img 
                        src='/svgs/moon.svg' 
                        alt='Display'  
                        className='w-[25px] h-[25px] moon-icon'
                        />
                    </div>
                    <p className=' text-secondary_light text-lg dark:text-gray-200'>
                        Dark Mode
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-1 pl-2 mt-2'>
                <div className='flex items-center justify-between hover:bg-active dark:hover:bg-dark_primary cursor-pointer rounded-md py-2 pl-2 pr-2 text-secondary_light dark:text-gray-200 font-medium text-lg'>
                    <label htmlFor="light" className='w-full cursor-pointer'>
                        Off
                    </label>
                    <input 
                    type="radio"
                    id="light" 
                    value='light'
                    name='theme'
                    checked={theme === 'light'}
                    onChange={handleLightChange}
                    />
                </div>
                <div className='flex items-center justify-between hover:bg-active dark:hover:bg-dark_primary cursor-pointer rounded-md py-2 pl-2 pr-2 text-secondary_light dark:text-gray-200 font-medium text-lg'>
                    <label htmlFor="dark" className='w-full cursor-pointer'>
                        On
                    </label>
                    <input 
                    type="radio"
                    id="dark" 
                    name='theme'
                    value='dark'
                    checked={theme === 'dark'}
                    onChange={handleDarkChange}
                    />
                </div>
            </div>
        </>
    )
}

export default ThemeSelect