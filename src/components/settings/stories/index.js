import './styles.css'

const Stories = () => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-dark dark:text-light font-semibold text-xl'>
                    Stories settings
                </h3>
                <div className='bg-pure dark:bg-dark_primary shadow-2 rounded-lg sm:p-3 p-2 flex flex-col gap-4'>
                    <h5 className='text-secondary dark:text-gray-200 font-semibold text-base'>
                        Sharing options
                    </h5>
                    <div className='flex items-center justify-between text-sm text-secondary_light dark:text-gray-300'>
                       <div>
                            <p>Allow others to share your public stories to their own story?</p>
                            <span className='text-xs'>Their story will include your full name and a link to your original story. They control who sees it.</span>
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

export default Stories