import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import posthog from 'posthog-js';
import App from './App';
import './styles/global.css';

const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: 'https://eu.i.posthog.com',
    persistence: 'memory',
    disable_session_recording: true,
    capture_pageview: true,
    capture_pageleave: true,
    ip: false,
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
