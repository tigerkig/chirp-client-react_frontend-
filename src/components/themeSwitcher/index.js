import { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import './styles.css';

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const handleChange = () => {
        setIsDarkMode(!isDarkMode)
       
    }

    return (
        <div className='bg-light w-full flex justify-end py-1 px-4 '>
             <DarkModeToggle
                onChange={handleChange}
                checked={isDarkMode}
                size={40}
            />
        </div>
    );
}

export default ThemeSwitcher;