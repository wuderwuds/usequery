import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { CurrentTodo } from './pages/CurrentTodo';
import { Layout } from './layout'
import { Contacts } from './pages/Contacts';
import { Todos } from './pages/Todos';
import { Home } from './pages/Home';
import { UpdateForm } from './components/UpdateForm/index'
import {
  QueryClient,
  QueryClientProvider
  
} from '@tanstack/react-query'


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "todos",
        element: <Todos />,
      },
      {
        path: "todos/:idOfTodo", // :idOfTodo = параметр
        element: <CurrentTodo />,
        children: [
          {
            path: 'update',
            element: <UpdateForm />
          }
        ]
      },
      {
        path: 'contacts',
        element: <Contacts />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
   
  </React.StrictMode>
);
