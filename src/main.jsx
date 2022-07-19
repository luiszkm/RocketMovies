import React from 'react'
import ReactDOM from 'react-dom/client'

import { CreateMovie } from './pages/CreateMovie'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
      <GlobalStyle />
        <CreateMovie />     
    </ThemeProvider>
  </React.StrictMode>
)
