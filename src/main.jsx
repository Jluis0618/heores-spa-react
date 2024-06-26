import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './styles.css'
import { HeroesApp } from './HeroesApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <HeroesApp />
    </BrowserRouter>   
  </React.StrictMode>,
)
