import React, { useEffect, useState } from 'react'
import Artical from './Artical'
import { fetchNews } from '../store/AppSlice'
import { useDispatch,useSelector } from 'react-redux'

const Home = () => {
  const dispatch=useDispatch()
  const news= useSelector((state)=> state.news)
  useEffect(()=>{
    dispatch(fetchNews('asia'))
  },[])
  return (
    <div className='min-h-[60vh] py-6'>
      {news.isloading? 
        <div>Loading...</div>
      :news.iserror?
      <p className='text-xl text-center text-red-600 font-bold h-[60vh] pt-[10vh]'>something went wrong</p>
      :<main className='flex flex-wrap justify-center gap-4'>
        {
          news.data.articles && news.data.articles.filter((item)=> item.title!='[Removed]').map((item)=>{
            return <Artical data={item} key={item.publishedAt}/>
          })
        }
      </main>}
    </div>
  )
}

export default Home