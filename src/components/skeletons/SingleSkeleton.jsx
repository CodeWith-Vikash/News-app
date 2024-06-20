import React from 'react'

const singleSkeleton = () => {
  return (
    <div className='flex flex-col gap-4 p-4 lg:flex-row lg:justify-center lg:mb-[20vh]'>
        <div className='w-full h-[300px] bg-gray-200 lg:h-[400px] lg:w-[500px]'></div>
         <section className='flex flex-col gap-6 lg:w-[600px] py-6'>
            <div className='flex justify-between'>
                <p className='h-[20px] w-[120px] bg-gray-200'></p>
                <p className='h-[20px] w-[120px] bg-gray-200'></p>
            </div>
            <div className='flex flex-col gap-2'>
            <p className='h-[20px] w-full bg-gray-200'></p>
            <p className='h-[20px] w-[80%] bg-gray-200'></p>
            </div>
            <div className='flex flex-col gap-2'>
            <p className='h-[20px] w-full bg-gray-200'></p>
            <p className='h-[20px] w-[70%] bg-gray-200'></p>
            </div>
            <div className='flex flex-col gap-2'>
            <p className='h-[20px] w-full bg-gray-200'></p>
            <p className='h-[20px] w-[80%] bg-gray-200'></p>
            </div>
         </section>
    </div>
  )
}

export default singleSkeleton