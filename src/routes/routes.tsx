import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Category from '../pages/Category';
import ProductPage from '../pages/Product';
import Collections from '../pages/Collections';
import Services from '../pages/Services';
import Booking from '../pages/Booking';
import Checkout from '../pages/Checkout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Blog from '../pages/Blog';
import Account from '../pages/Account';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:categorySlug" element={<Category />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="collections" element={<Collections />} />
        <Route path="services" element={<Services />} />
        <Route path="booking" element={<Booking />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="blog" element={<Blog />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
