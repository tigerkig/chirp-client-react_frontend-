import { Link } from 'react-router-dom'

const Page = ({ page }) => {
    return (
        <Link to={page?.url}>
            <div className="flex items-center gap-2 w-full py-2 px-2 hover:bg-active hover:dark:bg-dark_secondary rounded-md ">
                <div className="circle-img-small translate-x-[-2px]">
                    <img src={page?.img} alt={page?.title} />
                </div>
                <span className='dark:text-light'>{page?.title}</span>
            </div>
        </Link>
    )
}

export default Page