import { render } from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
