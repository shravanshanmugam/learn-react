import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';
import About from './routes/materialui/About'
import FunFacts from './routes/materialui/FunFacts';
import Reasons from './routes/materialui/Reasons';
import ErrorPage from './routes/ErrorPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider, Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Navigate to="/error" replace={true}/>,
    children: [
      { index: true, element: <FunFacts/> },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/fun-facts",
        element: <FunFacts/>
      },
      {
        path: "/reasons",
        element: <Reasons/>
      },
      {
        path: "/error",
        element: <ErrorPage/>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root'))
.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
