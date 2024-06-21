import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setDetails} from '../store/AppSlice'

const Artical = ({data}) => {
  const navigate=useNavigate()
  const dispatch= useDispatch()

  const handleClick=()=>{
    dispatch(setDetails(data))
    navigate(`/details/${data.title}`)
  }
  return (
    <div className='w-[300px] flex flex-col gap-1 shadow-xl cursor-pointer' onClick={handleClick}>
      <img src={data.image ?data.image:"/noimage.jfif"} alt="" className='w-full h-[200px] object-cover'/>
      <h3 className='font-semibold leading-5 text-lg p-2'>{data.title}</h3>
      <p className='leading-5 p-2'>{data.content}</p>
    </div>
  )
}

export default Artical