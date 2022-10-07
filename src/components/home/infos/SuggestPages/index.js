import './styles.css';
import { Link } from 'react-router-dom';
import PageItem from './PageItem';

const SuggestPages = () => {
    return (
        <div className='bg-pure dark:bg-dark_secondary rounded-md shadow-2 p-3 flex flex-col gap-3 '>
            <div className='flex items-center justify-between text-[13px] text-secondary dark:text-light'>
                <strong>Suggest Pages</strong>
                <Link to='/allPages'>
                    <span className='text-primary dark:text-rose-600 dark:font-semibold'>See all</span>
                </Link>
            </div>
            <div className='flex flex-col gap-4'>
                <PageItem name='JS developers' image='/tours/tour-4-1.jpg'/>
                <PageItem name='Blue diamond' image='/tours/tour-2-1.jpg'/>
                <PageItem name='Coder house' image='/tours/tour-7-3.jpg'/>
                <PageItem name='Multan Food' image='/tours/tour-1-1.jpg'/>
            </div>
        </div>
    )
}

export default SuggestPages