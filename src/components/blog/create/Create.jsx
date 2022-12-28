import React, { useState } from 'react'
import Nav from '../nav/Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Create.css'
export default function Create() {
    const token = window.localStorage.getItem('jwt')
    const navigate = useNavigate()
    const [newblog, setnewblog] = useState({ title: '', image: '', description: '', author: '' })
    const handlepost = async (e) => {
        e.preventDefault()
        const data = newblog
        await axios.post('https://dead-rose-kingfisher-slip.cyclic.app/api/blog', data, { headers: { authorization: token } }).then((response) => {
            navigate('/homepage')
        }).catch((e) => {
            console.log(e)
        })
    }
    return (
        <>
            <Nav />
            <div id='create-wrap'>
                <form >

                    <div>
                        <label htmlFor="title">Title</label><br />
                        <input type="text" name="title" id="blog_title" onChange={(e) => {
                            setnewblog({ ...newblog, title: e.target.value })
                        }} />
                    </div>
                    <div>
                        <label htmlFor="image">Paste Image link</label><br />
                        <input type="text" name="image" id="blog_image" onChange={(e) => {
                            setnewblog({ ...newblog, image: e.target.value })
                        }} />
                    </div>
                    <div>
                        <label htmlFor="description">Description of Blog</label><br />
                        <textarea name="description" id="blog_desc" rows={10} onChange={(e) => {
                            setnewblog({ ...newblog, description: e.target.value })
                        }} />
                    </div>
                    <div>
                        <label htmlFor="author">Author</label><br />
                        <input type="text" name="author" id="blog_author" onChange={(e) => {
                            setnewblog({ ...newblog, author: e.target.value })
                        }} />
                    </div>
                    <button id='save' onClick={(e) => {
                        handlepost(e)
                    }}>SAVE POST</button>
                </form>



            </div>
        </>

    )
}
