import { Link } from 'react-router-dom'
import { requestsData } from '../requests/RequestsData'
import ConfirmFriendItem from './ConfirmFriendItem'

const ConfirmFriends = () => {
    return (
        <div>
            <div className='bg-pure w-full py-4 px-3 rounded-xl shadow-md flex flex-col gap-4'>
                <div className='w-full flex items-center justify-between text-[12px]'>
                    <span className='secondary-light'>Friend Requests</span>
                    <Link to='/all'>
                        <span className='text-primary'>See all</span>
                    </Link>
                </div>
                <div className='flex flex-col gap-3'>
                    {
                        requestsData.slice(0,3).map((friend , i) => (
                            <ConfirmFriendItem friend={friend} key={i}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ConfirmFriends