import React from 'react'
import { FaLinkedin,FaGithub,FaTwitter } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {fetchQuery} from '../store/SearchSlice'

const Footer = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const searchCategory=(query)=>{
    dispatch(fetchQuery(query))
    navigate(`/category`)
   }
  return (
    <footer className='flex flex-col gap-4 p-4 font-semibold bg-gray-300'>
      <Link to='/'>
      <div className=' logo flex items-center gap-1 font-semibold text-lg'>
      <img src="/logo.png" alt="" className='h-10'/>
      <h1>NEWZY</h1>
      </div>
      </Link>
      <ul className='flex flex-col gap-2 text-lg md:flex-row md:gap-4'>
        <Link to='/'><li>Home</li></Link>
        <li onClick={()=> searchCategory('sports')} className='cursor-pointer'>sports</li>
        <li onClick={()=> searchCategory('earth')} className='cursor-pointer'>earth</li>
        <li onClick={()=> searchCategory('politics')} className='cursor-pointer'>politics</li>
      </ul>
      <section className="flex flex-col gap-2 md:flex-row">
         <p className='font-semibold'>Follow NEWZY on :</p>
         <div className='flex gap-4'>
         <a href="https://www.linkedin.com/in/code-with-vikash/" target='_blank'>
            <FaLinkedin size='1.5rem'/>
         </a>
         <a href="https://x.com/codeWithVikash" target='_blank'>
           <FaTwitter size='1.5rem'/>
         </a>
         <a href="https://github.com/CodeWith-Vikash" target='_blank'>
           <FaGithub size='1.5rem'/>
         </a>
         </div>
      </section>
      <p className='font-normal'>Copyright 2024 NEWZY. All rights reserved.  The NEWZY is not responsible for the content of external sites.</p>
    </footer>
  )
}

export default Footer