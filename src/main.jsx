import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header';
import FlexHome from './components/flexHome';
import App from './App';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
  
)
