import React, { useContext, useEffect, useState } from 'react'
import Nav from './nav/Nav'
import axios from 'axios'
import './Homepage.css'

export default function Homepage() {
    const [blogs, setblogs] = useState([])
    const token = window.localStorage.getItem('jwt')
    const [display, setdisplay] = useState(true)
    useEffect(() => {
        axios.get('https://dead-rose-kingfisher-slip.cyclic.app/api/blog', { headers: { authorization: token } }).then((data) => {
            console.log(data)
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

                            <div id='blog-wrap' key={i} >
                                <img id='blog_img' src={item.image} alt="blogimage" />
                                <p id='title'>{item.title}</p>
                                <span>BY : {item.author}</span> <span>DATE-TIME : {item.date}</span>
                                <p id='desc'>{item.description} <span onClick={() => { }} style={{ color: 'blue', cursor: 'pointer' }}>read more...</span></p>

                            </div>


                        )
                    })
                }

            </div>
        </>

    )
}
