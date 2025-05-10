import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SchoolProvider } from './context/SchoolContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SchoolProvider>
        <App />
      </SchoolProvider>
    </BrowserRouter>
  </React.StrictMode>
);
