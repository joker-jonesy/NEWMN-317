import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeProvider} from "./context/ThemeProvider.jsx";
import {ProductsProvider} from "./context/ProductsProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider >
          <ProductsProvider>
              <App />
          </ProductsProvider>
      </ThemeProvider>
  </StrictMode>,
)
