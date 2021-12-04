import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import NewUser from './components/NewUser';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/* v5 react-router-dom
        <Switch>
          <Route path='/' exact>
            <Redirect to="/welcome" />
          </Route>
        </Switch>
        */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />}>
            <Route path="new-user" element={<NewUser />} />
          </Route>
          <Route path="/products" element={<Products />} exact />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
