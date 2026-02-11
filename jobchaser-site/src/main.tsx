import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './veiw/components/Navbar/Navbar.tsx';
import HomePage from './veiw/pages/HomePage/HomePage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={"404"} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
