import './styles.css';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch , useSelector } from 'react-redux';
import { login } from '../../../redux/actions/authActions';
import { useEffect } from 'react';

const LoginForm = ( { email , setEmail , password , setPassword }) => { 
    const dispatch = useDispatch();
    const { loginError , loading } = useSelector(state => state.auth);   
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email , password 
        }
        dispatch(login(userData , toast , navigate));
    }

    useEffect(() => {
        if(loginError){
            toast.error(loginError);
            dispatch({ type : "CLEAR_ERRORS" });
        }
    }, [loginError]);

    return (
        <div className='w-full max-h-auto min-h-screen flex items-center justify-center bg-light dark:bg-dark_primary px-4'>
            <div className='w-full flex flex-col gap-6 items-center justify-center '>
                <h1 className='text-4xl text-primary font-bold text-center dark:text-rose-600'>
                    Chirp
                </h1>
                <div className="form-container p-4 flex flex-col gap-4 bg-pure dark:bg-dark_secondary rounded-md">
                    <div className='text-center font-semibold text-secondary dark:text-light'>
                        <h3>Login to your Chirp</h3>
                    </div>
                    <form className="form mt-4" onSubmit={handleLoginSubmit}>
                        <div className="form-control">
                            <input 
                            type="text" 
                            placeholder="none"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id='email'
                            />
                            <label htmlFor="email" className="form-label">Email address/phone number</label>
                        </div>
                        <div className="form-control">
                            <input 
                            type="text" 
                            placeholder="none"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id='password'
                            />
                            <label htmlFor="password" className="form-label">Password</label>
                        </div>
                        <div>
                            <button type="submit" className='btn-primary w-full'>
                                { 
                                    loading 
                                    ? 
                                        <BeatLoader size={10} color='#fff' />
                                    : 
                                        "Log In"
                                }
                            </button>
                        </div>
                    </form>
                    <div className='text-xs text-primary text-center py-3 dark:text-rose-600'>
                        <Link to='/forgot-account' className='hover:underline'>
                            Forget Account?
                        </Link>
                    </div>
                    <div className='flex items-center justify-center gap-6 mb-3'>
                        <div className='w-[40px] h-[40px]'>
                            <img src='/svgs/facebook.svg' className='w-full h-full object-cover'/>
                        </div>
                        <div className='w-[40px] h-[40px]'>
                            <img src='/svgs/google2.svg' className='w-full h-full object-cover'/>
                        </div>
                        <div className='w-[40px] h-[40px]'>
                            <img src='/svgs/twitter.svg' className='w-full h-full object-cover'/>
                        </div>
                    </div>
                    <div className="line w-full h-[1px] bg-gray-300"></div>
                    <div className='w-full shadow-md text-center py-2 px-4 text-sm border border-gray-200 cursor-pointer rounded-md text-secondary_light hover:text-dark mt-4 hover:shadow-lg dark:text-gray-200 dark:hover:text-rose-600'>
                        <button>
                            <Link to='/register'>
                                Create Account
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;