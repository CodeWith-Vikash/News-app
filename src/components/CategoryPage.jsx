import React from 'react'
import { useSelector } from 'react-redux'
import Artical from './Artical'
import ArticleSkeleton from './skeletons/ArticleSkeleton'

const CategoryPage = () => {
  const searchResult=useSelector((state)=> state.search)
  return (
    <div>
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
        {searchResult.data.articles && searchResult.data.articles.filter((item)=> item.title != '[Removed]').map((item,index)=>{
           return <Artical data={item} key={index}/>
        })}
      </section>}
    </div>
  )
}

export default CategoryPage