import React from 'react'
import { LikePrimary, Public2, Share } from '../../../svgs'
import AddUser from '../../../svgs/AddUser';
import { userData } from '../../../data/User';
import { usePageContext } from '../../../context/pageContext';

const Details = () => {
    const { pageDetails } = usePageContext();

    return (
        <div className='w-full flex sm:items-center justify-between sm:flex-row flex-col gap-6 sm:ml-1 ml-8'>
            <div className='left flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <div className='w-[90px] h-[90px] rounded-full'>
                        <img src={`https://chirp.shopziaa.com/${pageDetails?.pageProfileImage}`} alt="Page Profile" className='w-full h-full object-cover rounded-full'/>
                    </div>
                    <div className='text-dark dark:text-light font-semibold text-2xl'>
                        <h3>{pageDetails?.name}</h3>
                    </div>
                </div>
                <div className='text-xs flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <div className="public-svg">
                            <Public2 />
                        </div>
                        <span className='text-secondary_light dark:text-gray-300'>Public Page</span>
                    </div>
                    <div>
                        <span className='text-primary dark:text-rose-600'> 102k People like this</span>
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
                <button className="btn-secondary flex items-center gap-2">
                    <div className="small-svg-2 translate-y-[-1px]">
                        <LikePrimary />
                    </div>
                    <span>Like</span>
                </button>
                <button className="btn-primary page-share-btn flex items-center gap-2 ">
                    <div className="small-svg-2 pure-svg">
                        <Share />
                    </div>
                    <span>Share</span>
                </button>
            </div>
        </div>
    )
}

export default Details