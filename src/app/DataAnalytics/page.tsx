import React from 'react'
import Nav from '@/app/Home/nav'
import Footer from '@/app/Home/footer'
import DataAnalytics from './DataAnalytics'

const page = () => {
  return (
    <div>
        <Nav/>
        <DataAnalytics/>
        <Footer/>
    </div>
  )
}

export default page