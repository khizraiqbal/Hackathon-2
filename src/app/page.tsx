import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PopularStyles from './components/PopularStyles'
import ProductGrid from './components/ProductGrid'

function page() {
  return (
    <div>
       <Header/>
       <Hero/>
       <PopularStyles/>
       <ProductGrid/>
       <Footer/>
       
    </div>
  )
}

export default page
