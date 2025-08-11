import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Homepage.jsx'
import AddTransaction from './pages/AddTransactions.jsx'
import PageNotFound from './pages/Errorpage.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <PageNotFound/>,
},
{
  path: '/AddTransaction',
  element: <AddTransaction/>,
  errorElement: <PageNotFound/>
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
