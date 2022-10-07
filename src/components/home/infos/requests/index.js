import React from 'react'
import { Link } from 'react-router-dom'
import RequestItem from './RequestItem'
import { requestsData } from './RequestsData'

const Requests = () => {
    return (
        <div>
            <div className='bg-pure dark:bg-dark_secondary w-full py-4 px-3 rounded-xl shadow-md flex flex-col gap-4 '>
                <div className='w-full flex items-center justify-between text-[13px]'>
                    <span className='secondary-light dark:text-light'>Friend Requests</span>
                    <Link to='/all'>
                        <span className='text-primary dark:text-rose-600 dark:font-semibold'>See all</span>
                    </Link>
                </div>
                <div className='flex flex-col gap-6'>
                    {
                        requestsData.slice(0,3).map((request , i) => (
                            <RequestItem request={request} key={i}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Requests