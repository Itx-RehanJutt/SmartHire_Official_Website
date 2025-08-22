import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFound from './components/NotFound.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';  // 👈 Contact page import kiya

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: '/contact',   // 👈 Contact page ka route
        element: <Contact />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);
