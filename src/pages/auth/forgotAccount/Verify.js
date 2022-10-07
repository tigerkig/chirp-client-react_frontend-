import React from 'react'
import { Link } from 'react-router-dom'

const Verify = () => {
    return (
        <div className='forgot-container w-full min-h-screen bg-light dark:bg-dark_primary flex items-center justify-center px-4'>
           <div className='w-full sm:w-[500px] h-auto flex flex-col bg-white dark:bg-dark_secondary shadow-md py-4 rounded-md'>
                <div className='border-b border-b-gray-300 pb-4 text-center '>
                    <h3 className='text-lg text-primary font-semibold dark:text-light'>Reset your password</h3>
                </div>
                <div className='flex  p-4 pb-6 pt-6 text-sm text-secondary dark:text-gray-200'>
                    <div className='w-[80%] flex flex-col gap-2'>
                        <p>How do you want to receive the code to reset your password?</p>
                        <div className='flex items-center gap-2'>
                            <input type="radio" checked />
                            <div className='flex flex-col translate-y-1.5 '>
                                <span>Send code via SMS</span>
                                <span className='text-xs'>u***********@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-1 text-sm text-secondary dark:text-gray-200 w-[20%]'>
                        <div>
                            <img src="/img/monika.jpeg" alt="" className='w-[50px] h-[50px] rounded-full'/>
                        </div>
                        <div className='text-center'>
                            <p>Alex jack</p>
                            <span className='text-[10px]'>Chirp user</span>
                        </div>
                    </div>
                </div>
                <div className='border-t border-t-gray-300 pt-4 flex items-center justify-end gap-4 px-4'>
                    <Link to='/login'>
                        <button className="btn-primary">Not you ?</button>
                    </Link>
                    <button className='btn-secondary'>
                        continue
                    </button>
                </div>
                
           </div>
        </div>
    )
}

export default Verify