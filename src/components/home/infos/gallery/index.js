import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className='bg-pure dark:bg-dark_secondary shadow-2 rounded-md flex flex-col gap-3 p-3 '>
            <div className='flex items-center justify-between text-13'>
                <span className='font-semibold text-secondary dark:text-light'>
                    Photos
                </span>
                <Link to='/all' className='text-primary dark:text-rose-600 dark:font-semibold'>
                    See all
                </Link>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <img src="/tours/tour-6-1.jpg" alt="" className='rounded-md'/>
                <img src="/tours/tour-5-1.jpg" alt="" className='rounded-md'/>
                <img src="/tours/tour-1-1.jpg" alt="" className='rounded-md'/>
                <img src="/tours/tour-2-1.jpg" alt="" className='rounded-md'/>
                <img src="/tours/tour-3-1.jpg" alt="" className='rounded-md'/>
                <img src="/tours/tour-4-1.jpg" alt="" className='rounded-md'/>
                <img src="/tours/tour-7-1.jpg" alt="" className='rounded-md'/>
                <img src="/tours/tour-8-1.jpg" alt="" className='rounded-md'/>
            </div>
        </div>
    )
}

export default Gallery