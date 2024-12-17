import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout';
import Hero from './components/custom/Hero';
import ProtectedRoute from './pages/ProtectedRoute';
import PlanTrip from './pages/plan-trip/PlanTrip';
import ViewTrip from './pages/view-trip/[tripId]/ViewTrip';

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
    ],
  },
]);

function App() {
  const [tripData, setTripData] = useState({
    id: null,
    tripDataFromAi: {
      hotels: [],
      itinerary: [],
      userEmail: '',
    },
    userSelections: {
      budget: '',
      days: '',
      destination: '',
      peopleType: '',
    },
  });

  return (
    <TripDataContext.Provider value={{ tripData, setTripData }}>
      <RouterProvider router={router} />
    </TripDataContext.Provider>
  );
}

export default App;
