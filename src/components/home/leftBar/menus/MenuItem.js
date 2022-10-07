
import { Link } from 'react-router-dom';



const MenuItem = ({ title , url , Svg }) => {
    return (
        <Link to={url}>
            <div className='flex items-center gap-3 w-full py-2 px-2 hover:bg-active dark:hover:bg-dark_secondary rounded-md '>
                <div className="small-svg ">
                    <Svg />
                </div>
                <p className='dark:text-light'>{title}</p>
            </div>
        </Link>
    )
}

export default MenuItem