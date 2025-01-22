import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductsPages from './pages/productsPages'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPages'
import Contact from './pages/Contact'
import LaBrasseriePage from './pages/LaBrasseriePage'
import LegalesPage from './pages/LegalesPage'
import ConfidentialPage from './pages/ConfidentialPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPages /> },
      { path: '/La-brasserie', element: <LaBrasseriePage /> },
      { path: '/contact', element: <Contact /> },
      { path: '/confidential', element: < ConfidentialPage /> },
      { path: '/legales', element: <LegalesPage /> }

    ]
  },

])
function App() {
  return <RouterProvider router={router} />
}

export default App
