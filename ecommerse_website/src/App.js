import { Fragment } from 'react';
import ProductList from './components/ProductList/ProductList';
import Header from './components/layout/Header';

function App() {
  return (
     <Fragment>
      <Header></Header>
        <ProductList></ProductList>
     </Fragment>
      
  );
}

export default App;
