import React, { useEffect, useState } from 'react'
import Artical from './Artical'
import { fetchNews } from '../store/AppSlice'
import { useDispatch,useSelector } from 'react-redux'
import ArticleSkeleton from './skeletons/ArticleSkeleton'

const Home = () => {
  const dispatch=useDispatch()
  const news= useSelector((state)=> state.news)

  // fetching articles for homepage
  useEffect(()=>{
    dispatch(fetchNews('india'))
  },[])
  
  return (
    <div>
      <img src="/hero.jpg" alt="" className='w-full h-[300px] lg:h-[200px] mb-10 object-cover'/>
      <section className='min-h-[60vh] py-6'>
      {news.isloading? 
        <div className='flex flex-wrap justify-center gap-6 p-4'>
        {
          Array.from({ length: 10 }).map((item, index) => {
            return <ArticleSkeleton key={index} />;
          })
        }
      </div>
      
      :news.iserror?
      <p className='text-xl text-center text-red-600 font-bold h-[60vh] pt-[10vh]'>something went wrong</p>
      :<main className='flex flex-wrap justify-center gap-4'>
        {
          news.data.articles && news.data.articles.map((item)=>{
            return <Artical data={item} key={item.publishedAt}/>
          })
        }
      </main>}
    </section>
    </div>
  )
}

export default Home