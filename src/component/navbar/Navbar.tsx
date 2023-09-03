import Link from 'next/link'
import React from 'react'


const links = [
    {id:1,title:'home',url:'/'},
    {id:2,title:'portfolio',url:'/portfolio'},
    {id:3,title:'dashboard',url:'/dashboard'},
    {id:1,title:'about',url:'/about'},
    {id:1,title:'contact',url:'/contact'},
]

export const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between p-5'>
            <div className="logo">
                logo
            </div>
            <nav className=''>
                {links?.map(link=>
                    (
                    <Link key={link?.id} href={link?.url} className='mx-4 inline-block'>{link?.title}</Link>
                    ))}
            </nav>
        </div>
    </div>
  )
}
