import React from 'react'
import { Button } from '@/components/ui/button'

const joinus = () => {
  return (
    <div className='flex justify-center  items-center md:space-y-8 md:my-10 md:p-0 p-4'>
      <div className='from-blue-300 via-white to-blue-300 bg-gradient-to-br md:space-y-8 space-y-4 p-4 md:h-96  md:p-28 max-w-7xl md:mx-auto mx-10 md:w-auto w-80 rounded-2xl'>
        <h2 className='md:text-xl md:flex item-center justify-center content-center md:mx-96 text-center md:font-thin text-blue-400 bg-slate-200 md:rounded-3xl hidden  md:w-60'>FINANCE ELEVATION</h2>
        <h2 className='text-center md:text-3xl font-bold'>Elevate your finanial journey with Financial</h2>
        <p className='md:text-center md:text-lg text-sm text-center md:w-auto  '>Unlock your financial potential with BikFinance. We provide personalized tools <span className='hidden md:block'>and insights to elevate your financial journey </span></p>
        <Button className='from-blue-300 via-white to-blue-300 bg-gradient-to-br text-black relative md:left-[35%] justify-items-center mx-24 '>Join us <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        </span>
        </Button>
      </div>
    </div>
  )
}

export default joinus;