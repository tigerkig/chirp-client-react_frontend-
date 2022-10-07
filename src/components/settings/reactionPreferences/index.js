import React from 'react'

const ReactionPreferences = () => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-dark dark:text-light font-semibold text-xl'>
                    Reaction preferences
                </h3>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Hide number of reacations
                    </h5>
                    <div className='flex items-center justify-between text-sm text-secondary_light dark:text-gray-300'>
                       <div>
                            <p>On posts from others</p>
                            <span className='text-xs'>you won’t see the total number of reactions for posts other share to Newsfeed, Pages etc.</span>
                       </div>
                       <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                       </div>
                    </div>
                    <div className='flex items-center justify-between text-sm text-secondary_light dark:text-gray-300'>
                       <div>
                            <p>On posts from Yours</p>
                            <span className='text-xs'>you won’t see the total number of reactions for posts other share to Newsfeed, Pages etc.</span>
                       </div>
                       <div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactionPreferences