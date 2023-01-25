import React from 'react';
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Order from './pages/order/Order';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className='mainContainer'   >
    <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/order' element={<Order />} />
   </Routes>
   <Footer />
    </div>  
    
    </BrowserRouter>
    </>
  )
}

export default App