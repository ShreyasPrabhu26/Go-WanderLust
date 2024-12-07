import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router'
import PlanTrip from './plan-trip/index.jsx'
import NavBar from './components/custom/NavBar.jsx'
import Hero from './components/custom/Hero.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/plan-trip',
    element: <PlanTrip />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </StrictMode>,
)
