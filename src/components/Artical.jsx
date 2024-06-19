import React from 'react'
import { useNavigate } from 'react-router-dom'

const Artical = ({data}) => {
  const navigate=useNavigate()
  return (
    <div className='w-[300px] flex flex-col gap-1 shadow-xl' onClick={()=> navigate(`/details/${data.title}`)}>
      <img src={data.urlToImage ?data.urlToImage:"/noimage.jfif"} alt="" className='w-full h-[200px] object-cover'/>
      <h3 className='font-semibold leading-5 text-lg p-2'>{data.title}</h3>
      <p className='leading-5 p-2'>{data.content}</p>
    </div>
  )
}

export default Artical