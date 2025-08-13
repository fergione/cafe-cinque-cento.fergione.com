import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Configure future flags
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

// Ensure we only create root once
const rootElement = document.getElementById('root');
if (!rootElement._reactRoot) {
  rootElement._reactRoot = ReactDOM.createRoot(rootElement);
}

const appBg = new URL('./img/menu_background.png', import.meta.url).href
document.documentElement.style.setProperty('--app-bg-image', `url(${appBg})`)

rootElement._reactRoot.render(
  <React.StrictMode>
    <HashRouter {...router}>
      <App />
    </HashRouter>
  </React.StrictMode>
)
