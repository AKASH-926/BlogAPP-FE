import React, { useState } from 'react'
import axios from 'axios'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
export default function Signup() {

    const [data, setdata] = useState({ email: "", password: '' })
    const [cpassword, setcpassword] = useState('')
    const [error, seterror] = useState({ email: true, password: true, cpassword: true })
    const navigate = useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault()
        await axios.post('https://dead-rose-kingfisher-slip.cyclic.app/api/signup', data).then((response) => {
            alert('signup succesfull')
            setdata({ ...data, email: '', password: '' })
            seterror({ ...error, email: true, password: true, cpassword: true })
            setcpassword('')
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div id='signup-wrap'>
            <h2>SIGNUP</h2>
            <form >
                <div className='margin_bott'>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="email" value={data.email} onChange={(e) => {
                        if (e.target.value.includes('@')) {
                            seterror({ ...error, email: true })
                        } else {
                            seterror({ ...error, email: false })
                        }
                        if (e.target.value === '') {
                            seterror({ ...error, email: true })
                        }
                        setdata({ ...data, email: e.target.value })
                    }} /><br />

                </div>
                {error.email ? "" : <span className='Sign_error'>Enter Valid Email</span>}
                <div className='margin_bott'>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" value={data.password} onChange={(e) => {
                        if (e.target.value.length >= 6) {
                            seterror({ ...error, password: true })
                        } else {
                            seterror({ ...error, password: false })
                        }
                        if (e.target.value === '') {
                            seterror({ ...error, password: true })
                        }
                        setdata({ ...data, password: e.target.value })
                    }} />
                </div>
                {error.password ? "" : <span className='Sign_error'>Password length must greater than 6</span>}
                <div className='margin_bott'>
                    <label htmlFor="confirmPassword">Confirm Password</label><br />
                    <input type="password" name="confirmPassword" id="c_password" onChange={(e) => {
                        if (e.target.value === data.password) {
                            seterror({ ...error, cpassword: true })
                        } else {
                            seterror({ ...error, cpassword: false })
                        }
                    }} /><br />
                    {error.cpassword ? "" : <span className='Sign_error'>Password not matches</span>}
                </div>

                <button id='sign-btn' onClick={(e) => { handleSignup(e) }}>SUBMIT</button>
            </form>

        </div>
    )
}
