import React from 'react'
import RegisterForm from '../../../components/auth/register';
import { useState } from 'react';

const userInfos = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  };

const Register = () => {  
    const [user, setUser] = useState(userInfos);

   
      
    return (
        <div className='register-container'>
            <RegisterForm user={user} setUser={setUser} />
        </div>
    )
}

export default Register