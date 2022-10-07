import React from 'react'
import { Link } from 'react-router-dom'

const ContactItem = ({ contact }) => {
    return (
        <Link to={contact?.url || "#"}>
            <div className="contact-item flex items-center gap-3 w-full py-2 px-2 hover:bg-active dark:hover:bg-dark_secondary rounded-md ">
                <div 
                className={`circle-img-small ${contact?.online ? 'active' : ''}  translate-x-[-2px]`}
                >
                    <img src={contact?.img} alt={contact?.name} className='object-cover'/>
                </div>
                <span className='dark:text-light '>{contact?.name}</span>
            </div>
        </Link>
    )
}

export default ContactItem