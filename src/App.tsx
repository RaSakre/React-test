import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import { ProductPage } from "./pages/products/product/ProductPage";
import Layout from "./Layout/Layout";
import Home from "./pages/index/Home";
import {NewProduct} from './pages/products/create-product/NewProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="create-product" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
