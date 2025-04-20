import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'

import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Home from './components/Home/Home.jsx'
import Desktops from './components/Desktops/Desktops.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'
import Users3 from './components/Users3/Users3.jsx'
import Posts from './components/Posts/Posts.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'
import Error from './Error/Error.jsx'

const users2Promise = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
const users3Promise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,

    children: [
      { index: true, Component: Home },

      { path: 'mobiles', Component: Mobiles },
      { path: "laptops", Component: Laptops },
      { path: "desktops", Component: Desktops },
     
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<h2> Loading,,,,,,,,,,</h2>}>

          <Users2 users2Promise={users2Promise}></Users2>

        </Suspense>
      },
      {
        path: 'users3',
        element: <Suspense fallback={<h3>Please wait for a while....</h3>}>
          <Users3 users3Promise={users3Promise}></Users3>
        </Suspense>
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,

      },
      {
        path: 'users/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) , 
        Component: UserDetails
      },
      {
        path: 'posts/:Id',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.Id}`),
        Component: PostDetails
      }
     
      
    ]
  },
  {
    path: "*",
   element: <Error></Error>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
