import React from 'react'
import FAQs from '../features/FAQs/FAQs'
import DownloadCTA from '../features/DownloadCTA/DownloadCTA'
import AboutSection from '../features/About/AboutSection'
import Pattern from '../features/About/Pattern'
import Values from '../features/About/Values'


function AboutPage() {
  return (
    <>
        <AboutSection/>
        <Pattern/>
        <Values/>
        <FAQs/>
        <DownloadCTA/>
    </>
  )
}

export default AboutPage
