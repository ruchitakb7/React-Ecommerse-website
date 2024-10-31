import React from 'react';
import Header from './components/layout/Header';
import ContextProvider from './store/ContextProvider';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import About from './components/pages/About';
import AddmovieForm from './components/pages/AddmoviesForm';
import Contact from './components/pages/Contact';

function App() {
  return(
  <Router>
  <ContextProvider>
    <Header />
   
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/" element={<Store />} /> 
      <Route path="/add-movies" element={<AddmovieForm/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
    </Routes>
  </ContextProvider>
  
</Router>
  )
}
export default App;
