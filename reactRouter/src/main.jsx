import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Contact from './routes/Contact.jsx'

// Página de erro
import ErrorPage from './routes/ErrorPage.jsx'

// Configurando Router
import{ createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"

// Componente base
import Home from './routes/Home.jsx'

// Rota dinamica
import Products from './routes/Products.jsx'

// Rota aninhadas
import Info from './routes/Info.jsx'

// Search params
import Search from './routes/Search.jsx'

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
      },
      // Rota dinâmica 
      {
        path: "products/:id",
        element: <Products />,
      },
      // Rota aninhadas
      {
        path: "products/:id/info",
        element: <Info />,
      },
      // Search
      {
        path: "search",
        element: <Search />,
      },
      // redirect
      {
        path: "teste",
        element: <Navigate to="/" />,
      },
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
