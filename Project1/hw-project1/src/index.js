import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MangaMain from "./MainComps/MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/app',
        element: <App/>
    },
    {
        path: '/',
        element: <MangaMain/>
    }
]);


root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
