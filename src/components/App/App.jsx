import "./style.css";
import PageWrapper from '../layout/PageWrapper/PageWrapper.jsx';
import IndexPage from '../layout/IndexPage/IndexPage.jsx';
import CatalogPage from '../layout/CatalogPage/CatalogPage.jsx';
import features from '../../mocks/features.jsx';
import products from '../../mocks/products.jsx';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/farm-products/" 
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