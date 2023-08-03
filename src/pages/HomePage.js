import React from 'react'
import Navbar from '../Component/Navbar'

import Category from '../Component/Category'
import Newletter from '../Component/Newletter'
import UpdatedNewletter from '../Component/UpdatedNewletter'
import Footer from '../Component/Footer'
import Slider from '../Component/Slider'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Category/>
      <Newletter/>
      <UpdatedNewletter/>
      <Footer/>
    </div>
  )
}

export default HomePage
