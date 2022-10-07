import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotAccount = () => {
    const navigate = useNavigate();
    const [search , setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/forgot-account/verify')
    }

    return (
        <div className='forgot-container w-full min-h-screen bg-light dark:bg-dark_primary flex items-center justify-center px-4'>
           <div className='w-full sm:w-[500px] h-auto flex flex-col bg-white dark:bg-dark_secondary shadow-md py-4 rounded-md'>
                <div className='border-b border-b-gray-300 pb-4 text-center '>
                    <h3 className='text-lg text-primary dark:text-gray-100 font-semibold'>Reset your password</h3>
                </div>
                <div className='px-4 pt-8'>
                    <form onSubmit={handleSubmit} className='form'>
                        <div className="form-control">
                            <input 
                            type="email" 
                            className="form-input" 
                            placeholder='none'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            required
                            />
                            <label className="form-label">Search account</label>
                        </div>
                        <div className='w-full flex flex-end justify-end'>
                            <button className="btn-primary" type='submit'>Search</button>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
}

export default ForgotAccount;