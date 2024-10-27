import { Fragment } from 'react';
import ProductList from './components/ProductList/ProductList';
import Header from './components/layout/Header';
import Generic from './components/UI/Generic';

function App() {
  return (
     <Fragment>
      <Header></Header>
      <Generic></Generic>
        <ProductList></ProductList>
     </Fragment>
      
  );
}

export default App;
