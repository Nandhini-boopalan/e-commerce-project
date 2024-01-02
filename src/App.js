import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import { BrowserRouter as Router,Routes,Route ,Link} from "react-router-dom"
import About from './components/about';
import ProductList from './components/productlist';
import Cart from './components/cart';
import { useState,useContext } from 'react';
import { carter } from './context';

function App() {
  const {cart,setCart}=useContext(carter)
  return (
    <div>
   
      <Router>
      <Header/>
        <div className='float-right px-10  '>
        <Link className='m-6'to="/" >Home</Link>
        <Link className='m-6' to="/about" >About</Link>
        <Link className='m-6' to="/product" >Product</Link>
        <Link className='m-6' to="/cart" >Cart-({cart.length})</Link>
       
        </div>
       
        
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<ProductList/>} />
          <Route path="/cart" 
          element={<Cart/>}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
