import { Link } from 'react-router-dom';
import { Birthday } from '../../../../svgs'

const BirthdayItem = ({ name }) => {
    return (
        <Link to='/username'>
            <div className='w-full flex items-center gap-3 hover:shadow-md p-2 rounded-md'>
                <div className="birthday-svg">
                    <Birthday />
                </div>
                <div className='text-[13px] text-secondary_light dark:text-light '>
                    <span><strong>{name}</strong>'s birthday is today</span>
                </div>
            </div>
        </Link>
    )
}

export default BirthdayItem