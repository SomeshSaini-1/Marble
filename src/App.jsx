import React from 'react';


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contectus from './Pages/Contectus';
import Nopage from './Pages/Nopage';

const App = () => {

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Contectus',
        element: <Contectus/>
      },
      {
        path: '*',
        element:  <><Nopage/></>
      },
  
    ])
  return (
    <RouterProvider router={router} />
  );
};

export default App;