import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import FitContextProvider from './Context/FitContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FitContextProvider>
      <App />
    </FitContextProvider>
  </StrictMode>,
)
