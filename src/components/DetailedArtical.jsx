
import { useDispatch,useSelector } from 'react-redux'

const DetailedArtical = () => {
  const dispatch= useDispatch()
  const {dataDetails}=useSelector((state)=> state.news)
  console.log(dataDetails)

  return (
    <div className='flex flex-col gap-6'>
      <section>
        <div className='flex flex-col gap-4 p-4 lg:flex-row lg:justify-center lg:gap-6 lg:my-12'>
             <img src={dataDetails.image} alt=""  className='w-full h-[300px]  lg:h-[400px] lg:w-[500px] object-cover'/>
             
             <div className='flex flex-col gap-4 max-w-[600px] lg:p-4'>
             <div className='flex justify-between flex-wrap'>
              <b>{dataDetails.source.name}</b>
              <b>{dataDetails.publishedAt}</b>
             </div>
             <h3 className='text-[1.9rem] font-bold leading-9'>{dataDetails.title}</h3>
             <p>{dataDetails.content}</p>
             <p>{dataDetails.description}</p>
             </div>
         </div>
    </section>
    </div>
  )
}

export default DetailedArtical