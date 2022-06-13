import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, Cart, Favorites, ProductPage, Login } from './pages';
import { useSelector } from "react-redux";
import './App.css';
import { Navbar, Footer, ProtectedRoutes, LoadingScreen } from './components';

function App() {

  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <Navbar />
      <div>
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<ProtectedRoutes />} />
         <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      </div>
      <Footer />
    </HashRouter>
    
  );
}

export default App;
