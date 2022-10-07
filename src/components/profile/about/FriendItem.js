import { DoubleTick } from '../../../svgs'

const FriendItem = ({ friend }) => {
    return (
        <div className='flex items-center gap-2 sm:gap-4'>
            <div className='circle-img'>
                <img src={friend?.img} alt={friend?.name} />
            </div>
            <div className='flex flex-col'>
                <p className='text-black text-sm dark:text-gray-200 '>{friend?.name}</p>
                <span className='text-[10px] font-light text-secondary_light'>
                    {
                        friend?.mutualFriends > 0 
                        ? 
                        friend.mutualFriends + ' mututal friends'
                        : 
                        'No Mutual Friend'
                    }
                </span>
                <div 
                className='bg-primary hover:bg-primaryHover rounded-md flex items-center justify-center py-1 gap-2 text-pure text-xs cursor-pointer mt-1 px-2 sm:px-4'
                >
                        <div className='small-svg-2 translate-y-[-1px]'>
                            <DoubleTick />
                        </div>
                        <span>Friends</span>
                </div>
            </div>
        </div>
    )
}

export default FriendItem