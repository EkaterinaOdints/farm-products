import "./style.css";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import PageWrapper from '../layout/PageWrapper/PageWrapper.js';
import IndexPage from '../layout/IndexPage/IndexPage.js';
import CatalogPage from '../layout/CatalogPage/CatalogPage.js';
import features from '../../mocks/features.js';
import products from '../../mocks/products.js';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <PageWrapper pageType="index">
              <IndexPage features={features} />
            </PageWrapper>
          }
        />
        <Route 
          path="/farm-products/catalog" 
          element={
            <PageWrapper pageType="inner">
              <CatalogPage products={products} />
            </PageWrapper>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;