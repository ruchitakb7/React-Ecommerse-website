import React from 'react';
import ProductList from './components/ProductList/ProductList';
import Header from './components/layout/Header';
import Generic from './components/UI/Generic';
import ContextProvider from './store/ContextProvider';

function App() {
  return (
      <ContextProvider>
      <Header></Header>
          <Generic></Generic>
          <ProductList></ProductList>
      </ContextProvider>
  );
}

export default App;
