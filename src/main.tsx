import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppContextProvider } from './context/App.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <AppContextProvider>

    <App />
  </AppContextProvider>
  // </React.StrictMode>,
)
