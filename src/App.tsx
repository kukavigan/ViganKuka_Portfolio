import { useState } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BigScoopProjectPage from './pages/BigScoopProjectPage';
import InspireHubProjectPage from './pages/InspireHubProjectPage';
import RootDevelopmentProjectPage from './pages/RootDevelopmentProjectPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ScrollToTop/>
    <div className="min-h-screen bg-black antialiased">
      <Navbar onMenuToggle={() => setMobileMenuOpen(true)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/big-scoop-cms" element={<BigScoopProjectPage />} />
        <Route path="/work/inspire-hub-erp" element={<InspireHubProjectPage />} />
        <Route path="/work/root-development" element={<RootDevelopmentProjectPage />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
