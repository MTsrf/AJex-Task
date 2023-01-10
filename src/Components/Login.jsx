import React, { useState } from 'react'
import login from '../../src/assets/FakeApi.json'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [message, setMessage] = useState("")
    const onSubmit = () => {
        if (!username && setPassword) {
            return setError("input field is required")
        }
        setError("")
        console.log(login.username)
        if (username === login.username && password === login.password) {
            const token = btoa(login.username)
            localStorage.setItem("user", token)
            setSuccess("login Successfully")
            setMessage(token)
            if (token) {
                setTimeout(() => {
                    navigate("/home")
                }, 1000)
            }
        }
    }
    console.log(success, message)
    return (
        <>

            <div className="login-head">
                {
                    error && <div className="error-message">{error}</div>
                }{
                    success && <div className="success-messag">{success},{message}</div>
                }
                <div className="input-field">
                    <input
                        name='email'
                        placeholder='Username'
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        name='password'
                        placeholder='password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button className='btn' onClick={() => { onSubmit() }}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Login
