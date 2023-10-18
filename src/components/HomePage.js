import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import About from './About'

const HomePage = () => {
  return (
    <>
    
    <CallToAction />
    <Specials buttonText='Order Online' titleText='This weeks specials!' buttonLink='/order-online' />
    <CustomersSay />
    <About />

    </>
  )
}

export default HomePage