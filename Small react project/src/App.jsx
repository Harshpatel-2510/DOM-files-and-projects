import React from 'react'
import Footer from './component/Footer';
import Nav from './component/Nav';
import Features from './component/Features';
import Dashboard from './component/Dashboard';
import Pricing from './component/Pricing';
import Testimonials from './component/Testimonials';

const App = () => {
  return (
    <div>
      <Nav />
      <Footer />
      <Features />
      <Dashboard />
      <Pricing />
      <Testimonials />
    </div>
  )
}

export default App
