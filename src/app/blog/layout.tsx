import React from 'react'

const BlogLayout = ({children}:any) => {
  return (
    <div>
        <h1 className='text-2xl font-bold'>This is Blog</h1>
        {children}
    </div>
  )
}

export default BlogLayout