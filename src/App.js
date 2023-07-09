import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'

import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import MonthPage from './pages/MonthPage';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    element: (
      <>
        <Navigation />
        <main className='main'>
          <Outlet />
        </main>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/calendar',
        element: <CalendarPage />,
      },
      {
        path: '/:month',
        element: <MonthPage />,
        loader: async ({params}) => {
          const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/events/${params.month}`)
          if (res.status === 404) {
            throw new Response('Not Found', {status: 404})
          }
          return res.json()
        }
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
