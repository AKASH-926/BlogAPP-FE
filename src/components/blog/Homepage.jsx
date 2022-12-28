import React, { useEffect, useState } from 'react'
import Nav from './nav/Nav'
import axios from 'axios'
import './Homepage.css'
export default function Homepage() {
    const [blogs, setblogs] = useState([])
    const token = window.localStorage.getItem('jwt')
    useEffect(() => {
        axios.get('https://dead-rose-kingfisher-slip.cyclic.app/api/blog', { headers: { authorization: token } }).then((data) => {
            setblogs([...data.data.blog])
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <>
            <Nav />
            <div id='homepage-wrap' >
                {
                    blogs.map((item, i) => {
                        return (
                            <div id='blog-wrap'>
                                <p id='title'>{item.title}</p>
                                <span>{item.author}</span> <span>{item.date}</span>
                                <p id='desc'>{item.description}</p>
                            </div>

                        )
                    })
                }

            </div>
        </>

    )
}
