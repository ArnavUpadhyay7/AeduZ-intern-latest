import React from 'react'
import Link from 'next/link'

const CheckOut2 = () => {
  return (
    <div className='pt-28'>
      <div className='hidden md:flex justify-around'>
        <div>
          <div className='size-12 rounded-full bg-blue-900'>  </div>
            <div className='pt-2'>
              <h4>Step 1</h4>
            </div>
        </div>
        <div>
            <div className='size-12 rounded-full bg-blue-500'> </div>
            <div className='pt-2'>
              <h4 className='font-semibold text-xl' >Step 2</h4>
            </div>
        </div>
        <div>
            <div className='size-12 rounded-full bg-blue-900'> </div>
            <div className='pt-2'>
              <h4>Step 3</h4>
            </div>
        </div>
        <div>
            <div className='size-12 rounded-full bg-blue-900'> </div>
            <div className='pt-2'>
              <h4>Step 4</h4>
            </div>
        </div>
      </div>

        {/* TOP SECTION ENDED */}
        
        <h1 className='py-8 text-center md:text-3xl text-2xl font-semibold'>
          Complete all 4 steps to Book your 1:1 Call
        </h1>

        {/* FORM SECTION */}

        <div className='md:h-[60vh] w-[80vw] mx-auto border-[2px] rounded-2xl'>

            <div>
                <h1 className='text-blue-800 py-6 text-center md:text-4xl text-2xl font-semibold'>Step 2: Schedule Your Call</h1>
            </div>
              <div className='w-[60vw] mx-auto'>
                <h3 className='py-1 text-base md:text-xl font-semibold'>Booking Date:</h3>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="date"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                      id="exampleFormControlInput3"
                      placeholder="Booking Date:" />
                </div>
                <h3 className='py-1 text-base md:text-xl font-semibold'>Booking Time:</h3>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="time"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                      id="exampleFormControlInput3"
                      placeholder="Booking Time:" />
                </div>
                <h3 className='py-1 text-base md:text-xl font-semibold'>Alternate Booking Time:</h3>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="time"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                      id="exampleFormControlInput3"
                      placeholder="Alternate Booking Time:" />
                </div>
              </div>

              <div className='flex justify-between'>
                <div className="md:py-2 py-6 flex justify-start px-2 md:px-40">
                      <Link
                        href="CheckOut"
                        className="rounded-md bg-indigo-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                         {"<-"} Previous
                      </Link>
                </div>
                <div className="md:py-2 py-6 flex justify-end px-2 md:px-40">
                      <Link
                        href="CheckOut3"
                        className="rounded-md bg-indigo-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Next {"->"}
                      </Link>
                </div>
              </div>

        </div>
        <div className='invisible '>
            hi
        </div>

    </div>
  )
}

export default CheckOut2
