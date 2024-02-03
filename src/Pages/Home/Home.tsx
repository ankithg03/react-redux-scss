import React from 'react'
import { FeaturedProduct, FeaturedProductData } from '../../Components/FeaturedProduct'

const Home = () => {
  return (
    <div>
      <FeaturedProduct products={FeaturedProductData}/>
    </div>
  )
}

export default Home