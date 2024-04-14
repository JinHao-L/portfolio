import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      {/* Route /portfolio back to main page */}
      <Route path="portfolio" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>,
);
