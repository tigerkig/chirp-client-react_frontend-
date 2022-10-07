import React from 'react'

const InviteFriendItem = ({ user }) => {

    

    return (
        <div className='flex items-center justify-between'>
            <label htmlFor={user?.id}>
                <div className='flex items-center gap-3'>
                    <div className="circle-img">
                        <img src={user?.image} alt="" />
                    </div>
                    <span className='dark:text-gray-300'>{user?.firstName + ' ' + user?.lastName}</span>
                </div>
            </label>
            <div>
                <input 
                type="checkbox" 
                id={user?.id} 
                />
            </div>
        </div>
    )
}

export default InviteFriendItem