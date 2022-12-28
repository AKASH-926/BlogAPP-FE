import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
    const [data, setdata] = useState({ email: "", password: '' })
    const [error, seterror] = useState({ email: true, password: true })
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        await axios.post('https://dead-rose-kingfisher-slip.cyclic.app/api/login', data).then((response) => {
            window.localStorage.setItem('jwt', response.data.token)
            alert('login succesfull')
            setdata({ ...data, email: '', password: '' })
            seterror({ ...error, email: true, password: true, cpassword: true })
            navigate('/homepage')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div id='login-wrap'>
            <h2>LOGIN</h2>
            <form >
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="lemail" value={data.email} onChange={(e) => {
                        setdata({ ...data, email: e.target.value })
                    }} />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="lpassword" value={data.password} onChange={(e) => {
                        setdata({ ...data, password: e.target.value })
                    }} />
                </div>

                <button id='log-btn' onClick={(e) => { handleLogin(e) }}>LOGIN</button>
            </form>
            <span>Need account?</span><Link id='signlink' to={'/signup'}>SIGNUP</Link>
        </div>
    )
}
