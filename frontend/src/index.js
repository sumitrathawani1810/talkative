import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);


