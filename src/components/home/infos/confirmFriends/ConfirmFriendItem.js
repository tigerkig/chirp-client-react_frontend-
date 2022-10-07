import React from 'react'

const ConfirmFriendItem = ( { friend }) => {
    return (
        <div className='bg-pure rounded-lg py-3 px-2 flex items-center gap-3 shadow-2 cursor-pointer hover:shadow-lg'>
            <div className="circle-img-small">
                <img src={friend?.img} alt={friend?.name} />
            </div>
            <div className='flex flex-col'>
                <span className='text-xs text-black font-semibold '>{friend?.name}</span>
                {
                    friend?.mutualFriends > 0 &&
                    <span className='text-[10px] text-secondary_light'>
                        {friend?.mutualFriends} mutual friends
                    </span>
                }
            </div>
        </div>
    )
}

export default ConfirmFriendItem