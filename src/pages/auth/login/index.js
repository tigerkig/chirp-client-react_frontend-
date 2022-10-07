import { useState } from 'react';
import LoginForm from '../../../components/auth/login'

const Login = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    return (
        <div className='login__container'>
            <LoginForm 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            />
        </div>
    )
}

export default Login