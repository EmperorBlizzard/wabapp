import React from 'react'
import Header from '../components/sections/Header'
import Showcase from '../components/sections/Showcase'
import ProductsGrid from '../components/sections/ProductsGrid'

const HomeView = () => {
  return (
    <div id="home">
        <Header />
        <Showcase />
        <ProductsGrid title="Featured products"/>
    </div>
  )
}

export default HomeView