import React from 'react'

const ArticleSkeleton = () => {
  return (
    <div className='flex flex-col gap-2 w-[250px]'>
        <div className="h-[200px] w-[250px] bg-gray-300"></div>
        <div className='flex flex-col gap-1 pr-2'>
            <p className="h-[20px] w-[230px] bg-gray-300"></p>
        <p className="h-[20px] w-[200px] bg-gray-300"></p></div>
        <div className='flex flex-col gap-1 pr-2'>
        <p className="h-[20px] w-[230px] bg-gray-300"></p>
        <p className="h-[20px] w-[180px] bg-gray-300"></p>
        </div>
    </div>
  )
}

export default ArticleSkeleton