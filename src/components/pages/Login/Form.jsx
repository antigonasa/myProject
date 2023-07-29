import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineLock, AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import './styles/form.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    console.log('showPassword', showPassword)

    const handleLogin = (e) => {
        e.preventDefault();
        if(!email || !password){
            setError('Please fill in all fields!')  
        }
        else if(password.length < 8){
            setError('The password should have more than 8 characters!')
        }
        else{
            axios.post("https://reqres.in/api/login", {
                email,
                password
            })
            .then((res) => {
                console.log('res', res);
                // navigate('/Home')
                setSuccess('Logged In successfully!');
                setEmail('');
                setPassword('');
                setError('');
            })
            .catch((err) => {
                console.log('err', err);
                setError(err.response.data.error)
            })
        }
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleLogin}>
                <h1>Log In</h1>
                <div className="input-container">
                    <span><AiOutlineMail /></span>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <span><AiOutlineLock /></span>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='eye' onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </div>
                </div>
                <button className='shared-button'>
                    Log In
                </button>

                {success ? 
                    <h4>{success}</h4>
                   :null }
                     {error ? 
                    <p className='error'>{error}</p>
                   :null }
            </form>
        </div>
    )
}

export default Form