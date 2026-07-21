import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import HomePage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup';
import Aboutpage from './landing_page/about/Aboutpage';
import Productpage from './landing_page/product/Productpage';
import Pricingpage from './landing_page/pricing/Pricingpage';
import Supportpage from './landing_page/support/Supportpage';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/support" element={<Supportpage />} />
        <Route path="/*" element={<NotFound />} />
      
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);