import { Link } from 'react-router-dom'

const Group = ({ group }) => {
    return (
        <Link to={group?.url}>
            <div className="flex items-center gap-2 w-full py-2 px-2 hover:bg-active hover:dark:bg-dark_secondary rounded-md ">
                <div className="circle-img-small translate-x-[-2px]">
                    <img src={group?.img} alt={group?.title} className='object-cover'/>
                </div>
                <span className='dark:text-light'>{group?.title}</span>
            </div>
        </Link>
    )
}

export default Group 