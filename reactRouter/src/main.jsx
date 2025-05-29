import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Contact from './routes/Contact.jsx'

// Página de erro
import ErrorPage from './routes/ErrorPage.jsx'

// Configurando Router
import{ createBrowserRouter, RouterProvider, Route} from "react-router-dom"

// Componente base
import Home from './routes/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // Componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ]
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
