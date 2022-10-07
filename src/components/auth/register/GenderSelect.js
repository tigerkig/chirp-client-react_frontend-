
const GenderSelect = ({ handleRegisterChange }) => {
 
    return (
        <div className="flex items-center justify-between gap-2">
            <div className='gender-select-box'>
                <label htmlFor="male">Male</label>
                <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={handleRegisterChange}
                    className='dark:bg-dark_primary dark:border-gray-500'
                />
            </div>
            <div className='gender-select-box'>
                <label htmlFor="female">Female</label>
                <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={handleRegisterChange}
                />
            </div>
            <div className='gender-select-box'>
                <label htmlFor="custom">Custom</label>
                <input
                    type="radio"
                    name="gender"
                    id="custom"
                    value="custom"
                    onChange={handleRegisterChange}
                />
            </div>
       
        </div>
    );
}

export default GenderSelect;