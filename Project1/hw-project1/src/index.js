import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MangaMain from "./MainComps/MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MangaInfo from "./MainComps/MainPage/MangaPage";
import MangaPage from "./MainComps/MainPage/MangaPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/MangaPage/:id',
        element: <MangaPage/>
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
