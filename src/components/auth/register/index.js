import './styles.css';
import DateOfBirthSelect from './DateOfBirthSelect';
import GenderSelect from './GenderSelect';
import  { Link } from 'react-router-dom';
import Policy from './Policy';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { register } from '../../../redux/actions/authActions';
import { useEffect } from 'react';

const RegisterForm = ( {user , setUser}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { registerError , loading } = useSelector(state => state.auth);

    const { 
        firstName, lastName , email, password, bYear, bMonth, bDay , gender
    } = user;
    
    const yearTemp = new Date().getFullYear();
    
    const years = Array.from(new Array(108), (val, index) => yearTemp - index);
    const months = Array.from(new Array(12), (val, index) => 1 + index);
    const getDays = () => {
        return new Date(bYear, bMonth, 0).getDate();
    };
    const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user)
      };

    const handleRegisterSubmit = async e => {
        e.preventDefault();
        const userData = {
            firstName ,
            lastName  ,
            email , 
            password,
            dateOfBirth : bDay + "-" + bMonth + "-" + bYear,
            gender 
        }
        dispatch(register(userData , toast , navigate )) 
    }

    useEffect(() => {
        if(registerError){
            toast.error(registerError);
            dispatch({ type : "CLEAR_ERRORS"})
        }
    }, [registerError])

      
    return (
        <div className='w-full max-h-auto min-h-screen flex items-center justify-center bg-light dark:bg-dark_primary px-4'>
            <div className='flex flex-col gap-6  '>
                <h1 className='text-4xl text-primary font-bold text-center'>
                    Chirp
                </h1>
                <div className="form-container p-4 flex flex-col gap-4 bg-pure dark:bg-dark_secondary rounded-md">
                    <div className='text-center font-semibold text-secondary dark:text-light    '>
                        <h3>Create your Chirp account</h3>
                    </div>
                    <form className="form mt-4" onSubmit={handleRegisterSubmit}>
                        <div className='form-col-2'>
                            <div className="form-control">
                                <input 
                                type="text" 
                                placeholder="none"
                                className="form-input"
                                value={firstName}
                                name='firstName'
                                onChange={handleRegisterChange}
                                />
                                <label className="form-label">First Name</label>
                            </div>
                            <div className="form-control">
                                <input 
                                type="text" 
                                placeholder="none"
                                className="form-input"
                                value={lastName}
                                name='lastName'
                                onChange={handleRegisterChange}
                                />
                                <label className="form-label">lastName</label>
                            </div>
                        </div>
                        <div className="form-control">
                            <input 
                            type="text" 
                            placeholder="none"
                            className="form-input"
                            value={email}
                            name='email'
                            onChange={handleRegisterChange}
                            />
                            <label className="form-label">Email address or phone number</label>
                        </div>
                        <div className="form-control">
                            <input 
                            type="password" 
                            placeholder="none"
                            className="form-input"
                            value={password}
                            name='password'
                            onChange={handleRegisterChange}
                            />
                            <label className="form-label">Your Password</label>
                        </div>
                        <div className='flex flex-col gap-1 -mt-2'>
                            <h4 className='text-sm text-secondary dark:text-gray-200'>Date of birth</h4>
                            <div>
                                <DateOfBirthSelect
                                bDay={bDay}
                                bMonth={bMonth}
                                bYear={bYear}
                                days={days}
                                months={months}
                                years={years}
                                handleRegisterChange={handleRegisterChange}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mt-3 mb-6'>
                            <h4 className='text-sm text-secondary dark:text-gray-200'>Gender</h4>
                            <div>
                                <GenderSelect 
                                handleRegisterChange={handleRegisterChange}
                                />
                            </div>
                        </div>
                        <div>
                            <Policy />
                        </div>
                        <div className='my-4'>
                            <button type="submit" className='btn-primary w-full'>
                                {
                                loading 
                                ? 
                                    <BeatLoader size={10} color='#fff' /> 
                                : 
                                    'Create Account'
                                }
                            </button>
                        </div>
                    </form>
                    <div className='text-xs text-primary text-center dark:text-rose-600'>
                        <Link to='/login' className='hover:underline'>
                            Already have an account?
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;