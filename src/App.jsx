import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductsPages from './pages/productsPages'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPages /> }

    ]
  },

])
function App() {
  return <RouterProvider router={router} />
}

export default App
