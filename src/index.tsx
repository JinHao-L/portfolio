import { render } from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import App from './App';

render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      {/* Route /portfolio back to main page */}
      <Route path="portfolio" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
