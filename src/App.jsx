import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/AboutUs';
import Contact from '@/pages/Contact/Contact';
import Products from '@/pages/Products/Products';
import ProductDetails from '@/pages/Products/ProductDetails';
import Checkout from './pages/Products/Checkout';
import SecondLayout from './layouts/SecondLayout';
import PaymentSuccess from './pages/Payment/PaymentSuccuss';
import PaymentFaild from './pages/Payment/PaymentFaild';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="paymentsuccuss" element={<PaymentSuccess />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/checkout" element={<SecondLayout />}>
          <Route index element={<Checkout />} />
          <Route path="/checkout/paymentfaild" element={<PaymentFaild />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
