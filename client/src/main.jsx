import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { VideogamesContextProvider } from './context/VideogameContext.jsx' 

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideogamesContextProvider>
    <App />
   </VideogamesContextProvider>
  </React.StrictMode>,
)
