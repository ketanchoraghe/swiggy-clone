<<<<<<< HEAD
import { StrictMode } from 'react'
=======
import React, { StrictMode } from 'react'
>>>>>>> 57596b73f249c68992d05ee2884aaaf52d9564ca
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <StrictMode>
    <App />
  </StrictMode>,
=======
  <React.StrictMode>
    <App />
    </React.StrictMode>
  
>>>>>>> 57596b73f249c68992d05ee2884aaaf52d9564ca
)
