import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@chakra-ui/react';
import PageLayout from './ui/layouts/PageLayout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import FAQsPage from './pages/FAQs';
import SupportPage from './pages/Support';
import ContactPage from './pages/Contact';
import ScrollToTop from './ui/layouts/ScrollToTop';
import ProductsPage from './pages/Products';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import PricingPage from './pages/Pricing';



function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box overflow="hidden">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products/:slug" element={<ProductsPage/>}/>
            <Route path="/about-us" element={<AboutPage/>}/>
            <Route path="/faqs" element={<FAQsPage/>}/>
            <Route path="/pricing" element={<PricingPage/>}/>
            <Route path="/support" element={<SupportPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="/terms-of-service" element={<Terms/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;