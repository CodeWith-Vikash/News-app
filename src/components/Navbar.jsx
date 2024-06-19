import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-6 h-16 border'>
      <Link to="/">
      <div className=' logo flex items-center gap-1 font-semibold text-lg'>
      <img src="/logo.png" alt="" className='h-10'/>
      <h1>NEWZY</h1>
      </div>
      </Link>
       <select className='outline-none font-semibold text-xl flex'>
         <option value="category" className='text-lg hover:bg-black hover:text-white'>category</option>
         <option value="category" className='text-lg hover:bg-black hover:text-white'>category</option>
         <option value="category" className='text-lg hover:bg-black hover:text-white'>category</option>
         <option value="category" className='text-lg hover:bg-black hover:text-white'>category</option>
       </select>
    </nav>
  )
}

export default Navbar