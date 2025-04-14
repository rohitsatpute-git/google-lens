import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

const isMobile = window.innerWidth <= 768

if (!isMobile) {
  root.innerHTML = `
    <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: #000;
      color: #fff;
      font-size: 1.5rem;
    ">
      Please open this application on a mobile device
    </div>
  `
} else {
  createRoot(root).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  )
}
