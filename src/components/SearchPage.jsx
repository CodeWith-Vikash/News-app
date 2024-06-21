import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Artical from './Artical'
import ArticleSkeleton from './skeletons/ArticleSkeleton'

const SearchPage = () => {
  const {query} = useParams()
  const searchResult=useSelector((state)=> state.search)
  return (
    <div className='min-h-[70vh]'>
       <p className='text-xl p-4 font-semibold'>Search Results for '{query}'</p>
      {searchResult.isloading?
      <div className='flex flex-wrap justify-center gap-6 p-4'>
        {
          Array.from({ length: 10 }).map((item, index) => {
            return <ArticleSkeleton key={index} />;
          })
        }
      </div>
      :searchResult.iserror?
      <p className='text-xl text-center text-red-600 font-bold h-[60vh] pt-[10vh]'>something went wrong</p>
      :<section className='flex flex-wrap justify-center gap-6 py-10'>
        {searchResult.data.articles && searchResult.data.articles.map((item,index)=>{
           return <Artical data={item} key={index}/>
        })}
      </section>}
    </div>
  )
}

export default SearchPage