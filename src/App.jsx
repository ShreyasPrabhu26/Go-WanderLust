import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Hero from './components/custom/Hero';
import ProtectedRoute from './pages/ProtectedRoute';
import PlanTrip from './pages/plan-trip/PlanTrip';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: '/plan-trip',
        element: (
          <ProtectedRoute>
            <PlanTrip />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
