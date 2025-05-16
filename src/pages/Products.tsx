import React from 'react'
import HeroProduct from '../features/Hero/HeroProduct'
import Offer from '../features/Offer/Offer'
import Solution from '../features/Solution/Solution'
import Works from '../features/Works/Works'
import WhyUs from '../features/WhyUs/WhyUs'
import Join from '../features/Join/Join'
import FAQs from '../features/FAQs/FAQs'
import DownloadCTA from '../features/DownloadCTA/DownloadCTA'
import { useParams } from 'react-router-dom'
import { productsData } from '../data/ProductsData'
import { ProductProps } from '../types/interfaces/ProductProps'


function ProductsPage() {

    const { slug } = useParams<{ slug: string }>();

    const filteredProduct = productsData?.find((product: any) => product?.slug === slug)

  return (
    <>
      <HeroProduct product={filteredProduct} />
      <Offer/>
      <Solution/>
      <Works/>
      <WhyUs/>
      <Join/>
      <FAQs/>
      <DownloadCTA/>
    </>
  )
}

export default ProductsPage
