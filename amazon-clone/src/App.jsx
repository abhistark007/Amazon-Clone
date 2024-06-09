
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import CartPage from './pages/cartpage/CartPage';
import PaymentPage from './pages/paymentpage/PaymentPage';
import Navbar from './components/Navbar';
import SubHeader from './components/SubHeader';
import { Toaster } from 'react-hot-toast';
import Success from './pages/successpage/Success';
import Fail from './pages/failpage/Fail';

function App() {
  

  return (
    <BrowserRouter>
    <Toaster/>
      <Navbar/>
      <SubHeader/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/cancel' element={<Fail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
