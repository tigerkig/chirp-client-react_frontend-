import React from 'react'
import { Link } from 'react-router-dom'

const SubMenuItem = ({ menu : { Svg , title , url } }) => {
    return (
        <Link to={url}>
            <div className='bg-pure shadow-2 rounded-lg flex flex-col gap-2 items-center justify-center py-3 cursor-pointer border border-transparent hover:border-primary dark:bg-dark_secondary'>
                <div className='small-svg-2'>
                    <Svg />
                </div>
                <p className='text-primary dark:text-light'>{title}</p>
            </div>
        </Link>
    )
}

export default SubMenuItem