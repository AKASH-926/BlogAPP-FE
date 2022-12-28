import React, { useState } from 'react'
import Homepage from '../blog/Homepage'
import BlogContext from './Context'
export default function BlogProvider() {
    const [selectedblog, setselectedblog] = useState('hello')
    return (
        <div>
            <BlogContext.Provider value={{ selectedblog, setselectedblog }}>
                <Homepage />
            </BlogContext.Provider>
        </div>
    )
}
