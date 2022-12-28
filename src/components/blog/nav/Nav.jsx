import React from 'react'
import './Nav.css'
import { useNavigate, Link } from 'react-router-dom'
export default function Nav() {
    const navigate = useNavigate()
    const handleLogout = () => {
        window.localStorage.removeItem('jwt')
        navigate('/')
    }
    return (
        <div id='nav-wrap'>
            <ul>
                <li id='logo'>BlOGAPP</li>
                <li> <Link to={'/homepage'}>HOME</Link></li>
                <li><Link to={'/create'}>CREATE</Link> </li>
                <li id='logout' onClick={(e) => { handleLogout(e) }}>LOGOUT</li>
            </ul>
        </div>
    )
}
