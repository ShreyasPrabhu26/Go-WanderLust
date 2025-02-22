import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout';
import Hero from './components/Hero';
import ProtectedRoute from './pages/ProtectedRoute';
import PlanTrip from './pages/plan-trip/PlanTrip';
import ViewTrip from './pages/view-trip/ViewTrip';
import MyTrips from './pages/my-trips/MyTrips';

export const TripDataContext = createContext(null);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Hero /> },
      {
        path: '/plan-trip',
        element: (
          <ProtectedRoute>
            <PlanTrip />
          </ProtectedRoute>
        ),
      },
      {
        path: '/view-trip/:tripId',
        element: (
          <ProtectedRoute>
            <ViewTrip />
          </ProtectedRoute>
        ),
      },
      {
        path: '/my-trips',
        element: (
          <ProtectedRoute>
            <MyTrips />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  const [tripData, setTripData] = useState(null);

  return (
    <TripDataContext.Provider value={{ tripData, setTripData }}>
      <RouterProvider router={router} />
    </TripDataContext.Provider>
  );
}

export default App;
