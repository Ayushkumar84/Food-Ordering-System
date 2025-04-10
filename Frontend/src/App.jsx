import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Footer from './Footer/Footer';
import { AppDownload } from './components/AppDownload/AppDownload';
import LoginPopup from './components/LoginPopup/LoginPopup';
import { Verify } from './pages/Verify/Verify';

function App() {

  const [showLogin, setShowLogin ] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
        <Route path="/verify" element={<Verify/>}/>
      </Routes>
    </div>
    <AppDownload/>
    <Footer/>
    </>
  )
}

export default App;