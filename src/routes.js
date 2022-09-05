import {  useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'products/:id', element: <Products /> },
      ],
    },
  ]);
}
