import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
export default function Protected_Route() {

    const token = window.localStorage.getItem('jwt')
    return (
        <div>
            {token ? <Outlet /> : <Navigate to={'/'} />}
        </div>
    )
}
