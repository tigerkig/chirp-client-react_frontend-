import React from 'react'

const SavedItem = ({ item }) => {
    return (
        <div className='w-full h-[170px] sm:h-[150px]  p-3 sm:p-4 rounded-lg shadow-2 bg-pure dark:bg-dark_secondary'>
            <div className='w-full h-full flex gap-4'>
                <div className='h-full w-[150px]'>
                    <img src={item.postImage} alt={item?.name} 
                    className='w-full h-full rounded-lg object-cover'
                    />
                </div>
                <div className='flex flex-col gap-3 justify-between'>
                    <h3 className='text-sm sm:text-xl text-dark font-semibold dark:text-gray-200'>
                        {item.name}'s Post
                    </h3>
                    <div className='flex items-center gap-3'>
                        <div className="circle-img-small">
                            <img src={item.profileImage} alt='Post owner' />
                        </div>
                        <p className='text-xs'>
                            <span className='text-secondary_light'>Saved from </span>
                            <span className='dark:text-light'>{item.name}'s post</span>
                        </p>
                    </div>
                    <div>
                        <button className="btn-primary">
                            Unsave
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SavedItem