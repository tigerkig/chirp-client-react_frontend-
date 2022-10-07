import { useThemeContext } from "../../../context/themeContext";



const General = () => {
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
        <div className='flex flex-col gap-8 h-fit sm:w-full w-[450px] overflow-x-auto '>
            <h3 className='text-dark dark:text-light text-lg sm:text-xl font-semibold'>
                General Account Settings
            </h3>
            <div className='flex flex-col gap-6'>
                <div className='flex gap-4 items-center justify-between text-secondary text-sm dark:text-gray-200'>
                    <p className='w-[25%]'>Name</p>
                    <div className='w-[50%]'>
                        <p>Alex James</p>
                    </div>
                    <button className='w-[25%] flex justify-end cursor-pointer text-primary dark:text-rose-600'>
                        Edit 
                    </button>
                </div>
                <div className='flex gap-4 items-center justify-between text-secondary text-sm dark:text-gray-200 '>
                    <p className='w-[25%]'>Username</p>
                    <div className='w-[50%]'>
                        <p>https/www.chrip.com/alix.james.8</p>
                    </div>
                    <button className='w-[25%] flex justify-end cursor-pointer text-primary dark:text-rose-600'>
                        Edit 
                    </button>
                </div>
                <div className='flex gap-4 items-center justify-between text-secondary text-sm  dark:text-gray-200'>
                    <p className='w-[25%]'>Contact</p>
                    <div className='w-[50%]'>
                        <p>Primary: (pending)</p>
                    </div>
                    <button className='w-[25%] flex justify-end cursor-pointer text-primary dark:text-rose-600'>
                        Edit 
                    </button>
                </div>
                <div className='flex gap-4 items-center justify-between text-secondary text-sm dark:text-gray-200 '>
                    <p className='w-[25%]'>Memorialisation settings</p>
                    <div className='w-[50%]'>
                        <p>Decide what happens to your main Chrip profile after you pass away</p>
                    </div>
                    <button className='w-[25%] flex justify-end cursor-pointer text-primary dark:text-rose-600'>
                        Edit 
                    </button>
                </div>
                <div className='flex gap-4 items-center justify-between text-secondary text-sm  dark:text-gray-200'>
                    <p className='w-[25%]'>Identity confirmation</p>
                    <div className='w-[50%]'>
                        <p>Confirmation your identity to do things</p>
                    </div>
                    <button className='w-[25%] flex justify-end cursor-pointer text-primary dark:text-rose-600'>
                        Edit 
                    </button>
                </div>
                <div className="text-secondary dark:text-light text-sm">
                    <p>Dark Mode</p>
                    <div className='flex flex-col gap-1 pl-2 mt-2 sm:w-1/3 w-full '>
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
                </div>
            </div>
        </div>
    )
}

export default General