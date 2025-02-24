import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeScript initialColorMode="light" />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
