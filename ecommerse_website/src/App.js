import React from 'react';
import ProductList from './components/ProductList/ProductList';
import Header from './components/layout/Header';
import Generic from './components/UI/Generic';
import ContextProvider from './store/ContextProvider';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import About from './components/pages/About';
import Footer from './components/UI/Footer';

function App() {
  return(
  <Router>
  <ContextProvider>
    <Header />
    <Generic />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/products" element={<Store />} /> 
    </Routes>
  </ContextProvider>
  
</Router>
  )
}
export default App;
{/* <ContextProvider>
      <NavBar />
      <ProductItems />
    </ContextProvider>
    <Router>
      <ContextProvider>
        <NavBar/>
        <MainTitle/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        </ContextProvider>
    </Router> */}