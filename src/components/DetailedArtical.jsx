
import {useSelector } from 'react-redux'
import { IoStar } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// fetching favourite from localStorage
const getLocalStorage = () => {
  let favourite = localStorage.getItem('favourite');
  return favourite ? JSON.parse(favourite) : [];
};

const DetailedArtical = () => {
  const [favouritenews, setfavouritenews] = useState(getLocalStorage())
  const {dataDetails}=useSelector((state)=> state.news)
  const navigate=useNavigate()
  console.log(dataDetails)

  // time stamp to date string
  const toDateString=(timestamp)=>{
    let date = new Date(timestamp);
    let dateStr = date.toISOString().split('T')[0];
    return dateStr
  }

  // add to favourite function
  const addToFav=()=>{
    const exist = favouritenews.some(item => item.title === dataDetails.title);
     if(!exist){
      setfavouritenews((prev)=> [dataDetails,...prev])
      localStorage.setItem('favourite',JSON.stringify([dataDetails,...favouritenews]))
     }

     navigate('/favourites')
  }

  return (
    <div className='flex flex-col gap-6'>
      <section>
        <div className='flex flex-col gap-4 p-4 lg:flex-row lg:justify-center lg:gap-6 lg:my-12'>
             <img src={dataDetails?.image} alt=""  className='w-full h-[300px]  lg:h-[400px] lg:w-[500px] object-cover'/>
             
             <div className='flex flex-col gap-4 max-w-[600px] lg:p-4'>
             <div className='flex justify-between flex-wrap'>
              <b>{dataDetails.source?.name}</b>
              <b>{dataDetails.publishedAt && toDateString(dataDetails.publishedAt)}</b>
             </div>
             <h3 className='text-[1.9rem] font-bold leading-9'>{dataDetails?.title}</h3>
             <p>{dataDetails?.content}</p>
             <p>{dataDetails?.description}</p>
             {/* add to favourite */}
             <div className='flex items-center gap-2 border-2 border-black w-fit p-2 rounded-full cursor-pointer' onClick={addToFav}>
               <b>Add to favourite</b>
               <IoStar size='1.7rem'/>
             </div>
             </div>
         </div>
    </section>
    </div>
  )
}

export default DetailedArtical