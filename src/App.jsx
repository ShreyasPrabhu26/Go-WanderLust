import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NavBar from './components/custom/NavBar'
import Hero from './components/custom/Hero'
import PlanTrip from './plan-trip/PlanTrip'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />
  },
  {
    path: '/plan-trip',
    element: <PlanTrip />
  },
])

function App() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow overflow-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App
