import React from 'react'
import { Like } from '../../../../svgs'

const Comment = ( { comment } ) => {
    return (
        <div className='comment w-full flex  gap-4'>
            <div className='comment-left w-[50px] h-[50px] rounded-full'>
                <img src={comment?.user?.image} alt={comment?.user?.name} className='max-w-[50px] w-[50px] h-[50px] rounded-full object-cover' />
            </div>
            <div className='comment-right flex flex-col gap-2'>
                <div className='bg-light dark:bg-dark_primary rounded-md p-3 flex flex-col gap-[1px]'>
                    <span className='text-[15px] font-medium text-dark dark:text-light '>
                        {comment?.user?.name}
                    </span>
                    <p className='text-secondary dark:text-secondary_light text-sm'>
                        {comment?.comment}
                    </p>
                </div>
                <div className='flex items-center gap-2 text-xs text-secondary dark:text-secondary_light'>
                    <span>4w</span>
                    <span>Reply</span>
                    <div className='flex items-center gap-1'> 
                        Like 
                        <div className='translate-y-[-2px]'>
                            <Like color='#850E10'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment