import { EyeFill, HeartOutline, Location, Private } from '../../../../svgs';
import './styles.css';

const ProfileAbout = () => {
    return (
        <div className='bg-pure dark:bg-dark_secondary rounded-lg p-2 sm:p-4 flex flex-col gap-4 shadow-2'>
            <div className='flex flex-col gap-1 text-sm text-dark dark:text-gray-300'>
                <span className='font-semibold text-secondary text-base sm:text-lg dark:text-light'>About</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo sunt perspiciatis culpa ipsa repellat corporis aliquam totam id labore!</p>
            </div>
            <div className='flex items-center gap-3'>
                <div className="small-svg-2 ">
                    <Private />
                </div>
                <div className='text-sm text-dark dark:text-gray-400'>
                    <span className='text-secondary dark:text-gray-200 font-semibold '>Private</span>
                    <p >Whats up, how are you?</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className="small-svg-2 ">
                    <EyeFill />
                </div>
                <div className='text-sm text-dark dark:text-gray-400'>
                    <span className='text-secondary dark:text-gray-200 font-semibold'>Visible</span>
                    <p>Anyone can find you</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className="small-svg-2">
                    <Location />
                </div>
                <div className='text-sm text-dark dark:text-gray-400'>
                    <span className='text-secondary font-semibold dark:text-gray-200'>Location</span>
                    <p>Alaska , USA</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className="small-svg-2">
                    <HeartOutline />
                </div>
                <div className='text-sm text-dark dark:text-gray-400 translate-y-[-2px]'>
                    <span className='text-secondary dark:text-gray-200 font-semibold'>Status </span>
                    <span>Single</span>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileAbout