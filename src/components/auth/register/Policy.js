import { Link } from "react-router-dom"

const Policy = () => {
    return (
        <div className='flex flex-col gap-4 text-xs text-grays dark:text-gray-300'>
            <div>
                <span>
                    People who use other services may have uploaded your information to Chrip.  
                    <Link to='/learn-more' >
                        <span className='text-primary dark:text-rose-600'> Learn more</span>
                    </Link>
                </span>
            </div>
            <div>
                <span>
                    By clicking Sign Up, you agreed to our 
                    <Link to='/policy'>
                        <span className='text-primary dark:text-rose-600'> Terms, Privacy and Cookies Policy </span>
                    </Link> 
                    You may receive SMS notifications from us and can otp out at any time. 
                </span>
            </div>
        </div>
    )
}

export default Policy