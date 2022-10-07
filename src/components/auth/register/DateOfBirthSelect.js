
const DateOfBirthSelect = ({
  bDay,
  bMonth,
  bYear,
  days,
  months,
  years,
  handleRegisterChange,
}) => {
 
  return (
    <div className="w-full flex items-center justify-between gap-2">
        <div className="register-select-box">
            <select name="bDay" value={bDay} onChange={handleRegisterChange} className='dark:bg-dark_primary dark:border-gray-500 addScroll'>
                {days.map((day, i) => (
                <option value={day} key={i}>
                    {day}
                </option>
                ))}
            </select>
        </div>
        <div className="register-select-box">
            <select name="bMonth" value={bMonth} onChange={handleRegisterChange}className='dark:bg-dark_primary dark:border-gray-500 addScroll'>
                {months.map((month, i) => (
                <option value={month} key={i}>
                    {month}
                </option>
                ))}
            </select>
        </div>
        <div className="register-select-box">
            <select name="bYear" value={bYear} onChange={handleRegisterChange}
            className='dark:bg-dark_primary dark:border-gray-500 addScroll'>
                {years.map((year, i) => (
                <option value={year} key={i}>
                    {year}
                </option>
                ))}
            </select>
        </div>
    </div>
  );
}


export default DateOfBirthSelect;