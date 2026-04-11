import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ResultChart from './components/ResultChart/ResultChart.jsx';
import User from './components/Users/Users.jsx';
import { User2 } from 'lucide-react';
import Users2 from './components/Users/Users2.jsx';
import UserDetails from './components/User/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/Post/PostDetails.jsx';

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json());
const postPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res=> res.json());

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
      {
        path: "users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path: "users2",
        // loader: () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
        element: <Users2 userPromise={userPromise}></Users2>
      },
      {
        path: "users/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params?.userId}`),
        element: <UserDetails/>
      },
      {
        path: "posts",
        element: <Posts postPromise={postPromise}/>
      },
      {
        path: "posts/:postId",
        // loader: (params) => console.log(),
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`),
        element: <PostDetails/>
      },
       {
        path: "*",
        element: <span>404 not found</span>
      }
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
