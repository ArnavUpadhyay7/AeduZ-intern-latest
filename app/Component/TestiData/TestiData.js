import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const TestiData = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
      <div className='lg:absolute top-[-7rem] z-[10] mx-auto'>
        <img 
        className="aspect-square rounded-full w-[140px] h-[140px] z-[25] "
        src={review.image}
    alt={review.name}/>
        {/* <div className='w-[140px] h-[140px] bg-blue-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div> */}
      </div>
      
      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
        <p className='text-[#37517e] uppercase text-sm'>{review.job}</p>
      </div>


      <div className='text-[#37517e] mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

      <div  className='text-[#37517e] mx-auto mt-5'>
        <FaQuoteRight/>
      </div>
    </div>
  )
}

export default TestiData