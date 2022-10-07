import React from 'react'
import { Public2 } from '../../../svgs'
import AddUser from '../../../svgs/AddUser';
import { userData } from '../../../data/User';
import { useGroupContext } from '../../../context/createGroupContext';

const Details = () => {
    const { groupDetails } = useGroupContext();

    return (
        <div className='w-full flex sm:items-center justify-between sm:flex-row flex-col gap-6 sm:ml-1 ml-8'>
            <div className='left flex flex-col gap-1'>
                <div className='text-dark font-semibold text-2xl dark:text-light'>
                    <h3>{groupDetails?.name}</h3>
                </div>
                <div className='text-xs flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <div className="public-svg">
                            <Public2 />
                        </div>
                        <span className='text-secondary_light dark:text-gray-300'>Public Group</span>
                    </div>
                    <div>
                        <span className='text-primary dark:text-rose-600'> 102k Members</span>
                    </div>
                </div>
                <div className='relative flex items-center mt-1'>
                   {
                        userData.slice(1,7).map((user, i) => (
                            <div className='w-[35px] h-[35px] rounded-full border-2 border-white z-20 cursor-pointer'
                            style={{
                                marginLeft : `${i === 0 ? '' : '-6px'}`,
                                zIndex : userData.length - i
                            }}>
                                <img src={user.image} className='w-full h-full rounded-full' />
                            </div>
                        ))
                   }
                   <div className='w-[35px] h-[35px] rounded-full border-2 border-white cursor-pointer flex items-center justify-center bg-secondary text-pure -ml-1.5'>
                       <p className='translate-y-[-4px]'>...</p>
                   </div>
                   
                </div>
            </div>
            <div className='right flex items-center gap-3'>
                <button className="btn-secondary">Joined</button>
                <button className="btn-primary flex items-center gap-2 ">
                    <AddUser />
                     Invite
                </button>
            </div>
        </div>
    )
}

export default Details