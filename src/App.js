import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, Favorites, ProductPage, Login } from './pages';
import { useSelector } from "react-redux";
import './App.css';
import { Navbar, Footer, ProtectedRoutes, LoadingScreen } from './components';
import { Toaster } from 'react-hot-toast';
import { StateContext } from './context/StateContext';
import { Profile } from './pages/Profile';

function App() {

  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <StateContext>
        <Navbar />
        <Toaster />
        <div>
          {isLoading && <LoadingScreen />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route element={<ProtectedRoutes />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </StateContext>
    </HashRouter>
  );
}

export default App;
