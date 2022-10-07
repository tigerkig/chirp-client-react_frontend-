import { Link } from 'react-router-dom';

const OnlineItem = ({ friend }) => {
    return (
        <div className='bg-pure dark:bg-dark_secondary shadow-2 rounded-lg py-4 sm:px-3 px-2'>
            <Link to={friend?.url || "#"}>
                <div className="contact-item flex items-center gap-2 w-full py-2 px-2 hover:bg-active dark:hover:bg-secondary rounded-md ">
                    <div 
                    className={`circle-img-small ${friend?.online ? 'active' : ''}  translate-x-[-2px]`}
                    >
                        <img src={friend?.img} alt={friend?.name} className='object-cover'/>
                    </div>
                    <span className='dark:text-gray-200'>{friend?.name}</span>
                </div>
            </Link>
        </div>
    )
}

export default OnlineItem