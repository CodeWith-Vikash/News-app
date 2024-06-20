import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Artical from './Artical'
import { useDispatch,useSelector } from 'react-redux'
import {fetchDetails} from '../store/DetailSlice'
import SingleSkeleton from './skeletons/SingleSkeleton'

const DetailedArtical = () => {
  const {query}= useParams()
  const dispatch= useDispatch()
  const details=useSelector((state)=> state.details)
  
  useEffect(()=>{
    dispatch(fetchDetails(query))
    console.log(query)
  },[query])

  return (
    details.isloading?
      <div>
        <SingleSkeleton/>
      </div>
    :details.iserror?
     <p className='text-xl text-center text-red-600 font-bold h-[60vh] pt-[10vh]'>something went wrong</p>
    :<div className='flex flex-col gap-6'>
      <section>
      {details.data.articles && details.data.articles.filter((item)=> item.title==query).slice(0,1).map((item)=>{
         return <div className='flex flex-col gap-4 p-4 lg:flex-row lg:justify-center lg:gap-6 lg:my-12'>
             <img src={item.urlToImage?item.urlToImage:"/noposter.jfif"} alt=""  className='w-full h-[300px]  lg:h-[400px] lg:w-[500px] object-cover'/>
             
             <div className='flex flex-col gap-4 max-w-[600px] lg:p-4'>
             <div className='flex justify-between flex-wrap'>
              <b>{item.author}</b>
              <b>{item.publishedAt}</b>
             </div>
             <h3 className='text-[1.9rem] font-bold leading-9'>{item.title}</h3>
             <p>{item.description}</p>
             <p>{item.content}</p>
             </div>
         </div>
      })}
    </section>
    {/* Related Articles */}
      {details.data.articles?.length>1 && <section className='my-4'>
        <h3 className='text-xl font-bold p-4'>Related articles</h3>
      <div className='flex flex-wrap justify-center gap-4 p-4'>
        {
          details.data.articles && details.data.articles.filter((item)=> item.title!=query && item.title != '[Removed]').map((item)=>{
            return <Artical data={item} key={item.author} />
          })
        }
      </div>
      </section>}
    </div>
  )
}

export default DetailedArtical