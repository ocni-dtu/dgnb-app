import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@components'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

declare global {
  interface Window {
    umami: {
      track: (text: string) => void
    }
  }
}
