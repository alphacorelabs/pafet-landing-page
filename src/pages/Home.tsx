import React from 'react'
import HeroHome from '../features/Hero/HeroHome'
import Offer from '../features/Offer/Offer'
import Solution from '../features/Solution/Solution'
import Works from '../features/Works/Works'
import WhyUs from '../features/WhyUs/WhyUs'
import Join from '../features/Join/Join'
import FAQs from '../features/FAQs/FAQs'
import DownloadCTA from '../features/DownloadCTA/DownloadCTA'
import { useBreakpointValue } from '@chakra-ui/react'
import MobileWorks from '../features/Works/MobileWorks'


function HomePage() {
  
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <HeroHome/>
      <Offer/>
      <Solution/>
      {isDesktop ? <Works/> : <MobileWorks/>}
      <WhyUs/>
      <Join/>
      <FAQs/>
      <DownloadCTA/>
    </>
  )
}

export default HomePage
