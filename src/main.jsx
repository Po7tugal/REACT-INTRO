import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import Message from './Message.jsx'
import App from './App.jsx'
//import Header from './Header.jsx'
//import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
