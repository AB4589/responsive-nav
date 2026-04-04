import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ResultChart from './components/ResultChart/ResultChart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        index:true, element: <div>Hello</div>
      },
       {
        path:'hello', element: <ResultChart></ResultChart>
      },
      {
        path:'home', element: <div>This is Home Page</div>
      },
       {
        path: "about",
        element: <div>This is about page</div>
      },
    ]
  },
  {
    path: "app",
    element: <App></App>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
) 
