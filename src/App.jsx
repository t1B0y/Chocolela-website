import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChocolateFlavors from './components/ChocolateFlavors';
import NavBar from './components/NavBar';
import ProductsGallery from './components/ProductsGallery';
import FilterBar from './components/filterBar';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Theme from './styledComponents/themeProvider';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Theme>
        <NavBar />
        <Routes>
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chocolats" element={<ProductsGallery />} />
          <Route path="/patisseries" element={<ProductsGallery />} />
          <Route path="/cadeaux" element={<ProductsGallery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Theme>
    </>
  );
  <sxyprn className="com"></sxyprn>;
}

export default App;
