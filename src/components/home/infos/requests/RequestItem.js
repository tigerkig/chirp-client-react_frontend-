import React from 'react'

const RequestItem = ({ request }) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex items-center  gap-3 '>
                <div className="circle-img-small">
                    <img src={request?.img} alt={request?.name} />
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-black dark:text-light font-semibold '>{request?.name}</span>
                    {
                        request?.mutualFriends > 0 &&
                        <span className='text-[10px] text-secondary_light dark:text-gray-300'>
                            {request?.mutualFriends} mutual friends
                        </span>
                    }
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <button className="bg-primary  text-xs py-1.5 px-4 text-center text-pure rounded-md hover:bg-primaryHover">
                    Confirm
                </button>
                <button className="bg-pure dark:bg-gray-300 text-xs py-1.5 px-4 text-center text-dark rounded-md  border border-gray-200 hover:shadow-md dark:border-none dark:hover:text-primary ">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default RequestItem