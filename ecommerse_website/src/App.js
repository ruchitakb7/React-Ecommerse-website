import React, { useContext } from 'react';
import Header from './components/layout/Header';
import ContextProvider from './store/ContextProvider';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import About from './components/pages/About';
import AddmovieForm from './components/pages/AddmoviesForm';
import Contact from './components/pages/Contact';
import Product from './components/pages/Product';
import Auth from './components/Auth/Auth';
import AuthProvider from './components/Auth/AuthProvider';
import { AuthContext } from './components/Auth/AuthProvider';

function App() {
  const ctx=useContext(AuthContext)
  
  return(
  <Router>
    <AuthProvider>
  <ContextProvider>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route
          path="/store"
          element={
            ctx.isLoggedIn ? <Store/> : <Navigate to="/" replace />
          }/>
      <Route path="/add-movies" element={<AddmovieForm/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/product/:productId" element={<Product/>} />
      <Route path="/" element={<Auth/>}/>
      <Route path="/products" element={<Store/>}/>
      
    </Routes>
  </ContextProvider>
  </AuthProvider>
</Router>)
}
export default App;
