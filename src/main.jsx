import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Portfolio from './components/Portfolio.jsx';
import Resume from './components/Resume.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'resume',
        element: <Resume />
      },
    ]
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)