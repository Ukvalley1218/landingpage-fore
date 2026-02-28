import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Page Imports
import HeroSection from './Components/DubaiWealthHero'
import Second from './Components/WorkedWithSection'
import Third from './Components/BookFeaturesSection'
import Four from './Components/AuthorSection'
import Five from './Components/ImageGallerySection'
import Six from './Components/TestimonialsSection'
import Seven from './Components/LearningSection'
import Eight from './Components/TargetAudienceSection'
import Nine from './Components/BookContentsSection'


import Newthree from './Components/FAQSection'

import Fixedfooter from './Components/Fixedfooter'

// import TestIcon from './pages/Test'
import CheckoutPage from './Components/CheckoutNew'
import SuccessPage from './Components/SuccessPageNew'
import PrivacyPolicy from './Components/PrivacyPolicy'
import TermsAndConditions from './Components/TermsAndConditions'
import ReturnPolicy from './Components/ReturnPolicy'
import ShippingPolicy from './Components/ShippingPolicy'
import PaymentPolicy from './Components/PaymentPolicy'
import CookiePolicy from './Components/CookiePolicy'
import RecentPurchasePopup from './Components/RecentPurchasePopup'
import CenterOffPopup from './Components/CenterOffPopup'
import UTMTracker from './Components/UTMTracker'

const App = () => {
  const location = useLocation();

useEffect(() => {
  const params = new URLSearchParams(location.search);

  const reference = params.get("reference");
  const utm_source = params.get("utm_source");
  const utm_medium = params.get("utm_medium");
  const utm_campaign = params.get("utm_campaign");
  const utm_content = params.get("utm_content");

  // store all if found
  if (reference) sessionStorage.setItem("reference", reference);
  if (utm_source) sessionStorage.setItem("utm_source", utm_source);
  if (utm_medium) sessionStorage.setItem("utm_medium", utm_medium);
  if (utm_campaign) sessionStorage.setItem("utm_campaign", utm_campaign);
  if (utm_content) sessionStorage.setItem("utm_content", utm_content);

}, [location.search]);

  return (
    <>
    <UTMTracker />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/books/fore"
          element={
            <div>
              <RecentPurchasePopup />
      <CenterOffPopup />
              <HeroSection />
              <Second />
              <Third />
              <Four />
              <Five />
              <Six />
              <Seven />
              <Eight />
              <Nine />
             
              
              <Newthree />
              
              <Fixedfooter />
            </div>
          }
        />


    <Route path='/books/fore/checkout' element={<CheckoutPage/>}/>
    <Route path='/success' element={<SuccessPage/>}/>
    <Route path='/books/fore/privacy-policy' element={<PrivacyPolicy/>}/>
    <Route path='/books/fore/terms' element={<TermsAndConditions/>}/>
    <Route path='/books/fore/return-policy' element={<ReturnPolicy/>}/>
    <Route path='/books/fore/shipping-policy' element={<ShippingPolicy/>}/>
    <Route path='/books/fore/payment-policy' element={<PaymentPolicy/>}/>
    <Route path='/books/fore/cookie-policy' element={<CookiePolicy/>}/>
    
       
      </Routes>
    </>
  )
}

export default App
